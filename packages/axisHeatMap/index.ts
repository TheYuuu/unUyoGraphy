import ChartBase, { defaultOptions, defaultOpts } from "../chartBase";

import { ScaleLinear, Selection, BaseType, ScaleOrdinal } from "d3";
import { min, max } from "d3-array";
import { scaleLinear, scaleOrdinal } from "d3-scale";
import "d3-transition";

export interface axisHeatMapData {
  value: number;
  xPos: string | number;
  yPos: string | number;
}

export interface seriesData {
  name: string;
  value: number;
}

export interface axisHeatMapOptionData {
  data: axisHeatMapData[];
  seriesX: string[];
  seriesY: string[];
}

export interface axisHeatMapOptionHandledData {
  data: axisHeatMapData[];
  seriesX: seriesData[];
  seriesY: seriesData[];
}

export interface opts extends defaultOpts {
  mainColor?: string;
}

export interface axisHeatMapOptions extends defaultOptions {
  data: axisHeatMapOptionData;
  opts?: opts;
}
export default class AxisHeatMap extends ChartBase {
  private data: axisHeatMapOptionHandledData = {
    data: [],
    seriesX: [],
    seriesY: [],
  };

  private opts = {
    mainColor: "rgb(107 3 24)",
    ...this._opts,
  };

  private rectWidth: number = 0;
  private topXAxisWidth: number = 0;
  private leftScale: ScaleLinear<number, number, never> = scaleLinear();

  private lineHeight: number = 0;
  private topScale: ScaleLinear<number, number, never> = scaleLinear();

  private dotScale: ScaleLinear<number, number, never> = scaleLinear();
  private xPosAxis: ScaleOrdinal<string, unknown, never> = scaleOrdinal();

  private top_g: Selection<SVGGElement, unknown, null, undefined> | null = null;
  private left_g: Selection<SVGGElement, unknown, null, undefined> | null =
    null;
  private dot_g: Selection<SVGGElement, unknown, null, undefined> | null = null;

  constructor(opt: axisHeatMapOptions) {
    super(opt);

    this.init();
    this.update(opt.data);
  }

  private handleData(data: axisHeatMapOptionData): void {
    const seriesXIndexMap: {
      [key: string]: number;
    } = {};

    const seriesYIndexMap: {
      [key: string]: number;
    } = {};

    const seriesXData: seriesData[] = [];
    const seriesYData: seriesData[] = [];

    for (let i = 0; i < data.seriesX.length; i++) {
      seriesXIndexMap[data.seriesX[i]] = i;
      seriesXData.push({
        name: data.seriesX[i],
        value: 0,
      });
    }

    for (let i = 0; i < data.seriesY.length; i++) {
      seriesYIndexMap[data.seriesY[i]] = i;
      seriesYData.push({
        name: data.seriesY[i],
        value: 0,
      });
    }

    const dataMap: {
      [key: string]: {
        [key: string]: number;
      };
    } = {};

    const dataArr: axisHeatMapData[] = [];

    for (let i = 0; i < data.data.length; i++) {
      if (!dataMap[data.data[i].xPos]) {
        dataMap[data.data[i].xPos] = {};
      }

      if (!dataMap[data.data[i].xPos][data.data[i].yPos]) {
        dataMap[data.data[i].xPos][data.data[i].yPos] = 0;
      }

      dataMap[data.data[i].xPos][data.data[i].yPos] += data.data[i].value;

      seriesXData[seriesXIndexMap[data.data[i].xPos]].value +=
        data.data[i].value;
      seriesYData[seriesYIndexMap[data.data[i].yPos]].value +=
        data.data[i].value;
    }

    for (let k1 in dataMap) {
      for (let k2 in dataMap[k1]) {
        dataArr.push({
          value: dataMap[k1][k2],
          xPos: k1,
          yPos: k2,
        });
      }
    }

    this.data = {
      data: dataArr,
      seriesX: seriesXData,
      seriesY: seriesYData,
    };
  }

  private init() {
    this.lineHeight = this.containerHeight * 0.2;

    if (!this.ctx) {
      throw new Error("No useful ctx");
    }

    this.top_g = this.ctx.append("g");
    this.left_g = this.ctx.append("g");
    this.dot_g = this.ctx.append("g");
  }

  private draw(): void {
    const { lineHeight, top_g, left_g, dot_g } = this;

    const topMaxX = max(this.data.seriesX.map((v) => v.value));
    if (topMaxX === undefined) {
      throw new Error();
    }

    const topScale = scaleLinear().domain([0, topMaxX]).range([0, lineHeight]);

    const maxLen =
      this.containerHeight < this.containerWidth
        ? this.containerHeight
        : this.containerWidth;
    const topXAxisWidth = maxLen * 0.7 - this.data.seriesX.length;
    const rectWidth = topXAxisWidth / this.data.seriesX.length;

    if (!top_g) {
      return;
    }

    const topRects = top_g.selectAll(".topRects").data(this.data.seriesX);

    this.rectWidth = rectWidth;
    this.topScale = topScale;

    this.updateTopRects(topRects);

    const rightMaxY = max(this.data.seriesY.map((v) => v.value));
    if (rightMaxY === undefined) {
      throw new Error();
      return;
    }

    const leftScale = scaleLinear()
      .domain([0, rightMaxY])
      .range([0, lineHeight]);

    if (!left_g) {
      return;
    }

    const leftRects = left_g.selectAll(".leftRects").data(this.data.seriesX);

    this.topXAxisWidth = topXAxisWidth;
    this.leftScale = leftScale;
    this.updateLeftRects(leftRects);

    const xPosAxis = scaleOrdinal()
      .domain(this.data.seriesX.map((v) => v.name))
      .range(
        new Array(this.data.seriesX.length).fill(0).map((item, index) => index)
      );

    const dotR = rectWidth / 4;
    const minDot = min(this.data.data.map((v) => Number(v.value))) || 0;
    const maxDot = max(this.data.data.map((v) => Number(v.value))) || 0;
    const dotScale = scaleLinear()
      .domain([minDot, maxDot])
      .range([minDot === 0 ? 0 : dotR, dotR * 5]);

    if (!dot_g) {
      return;
    }
    const dots = dot_g.selectAll(".dots").data(this.data.data);

    this.dotScale = dotScale;
    this.xPosAxis = xPosAxis;
    this.updateDots(dots);
  }

  private updateTopRects(
    topRects: Selection<BaseType, seriesData, SVGGElement, unknown>
  ) {
    const { rectWidth, lineHeight, topScale } = this;
    const enter = topRects.enter();
    const exit = topRects.exit();

    topRects
      .transition()
      .duration(this.opts.duration)
      .attr("x", (d, i) => i * (rectWidth + 1))
      .attr("y", (d, i) => lineHeight - topScale(d.value))
      .attr("width", rectWidth)
      .attr("height", (d) => topScale(d.value));

    enter
      .append("rect")
      .attr("class", "topRects")
      .attr("fill", this.opts.mainColor)
      .attr(
        "transform",
        `translate(${this.opts.padding}, ${this.opts.padding})`
      )
      .attr("x", (d, i) => i * (rectWidth + 1))
      .attr("y", (d, i) => lineHeight)
      .attr("width", rectWidth)
      .attr("height", 0)
      .transition()
      .duration(this.opts.duration)
      .attr("y", (d, i) => lineHeight - topScale(d.value))
      .attr("height", (d) => topScale(d.value));

    exit.transition().duration(this.opts.duration).attr("height", 0).remove();
  }

  private updateLeftRects(
    leftRects: Selection<BaseType, seriesData, SVGGElement, unknown>
  ) {
    const { rectWidth, topXAxisWidth, leftScale } = this;
    const enter = leftRects.enter();
    const exit = leftRects.exit();

    leftRects
      .transition()
      .duration(this.opts.duration)
      .attr("height", rectWidth)
      .attr("x", topXAxisWidth)
      .attr("y", (d, i) => i * (rectWidth + 1) + this.containerHeight * 0.2)
      .attr("width", (d) => leftScale(d.value));

    enter
      .append("rect")
      .attr("class", "leftRects")
      .attr("height", rectWidth)
      .attr("x", topXAxisWidth)
      .attr("y", (d, i) => i * (rectWidth + 1) + this.containerHeight * 0.2)
      .attr("fill", this.opts.mainColor)
      .attr(
        "transform",
        `translate(${
          this.opts.padding + this.data.seriesX.length + rectWidth
        }, ${this.opts.padding + rectWidth})`
      )
      .transition()
      .duration(this.opts.duration)
      .attr("width", (d) => leftScale(d.value));

    exit.remove();
  }

  private updateDots(
    dots: Selection<BaseType, axisHeatMapData, SVGGElement, unknown>
  ) {
    const { rectWidth, lineHeight, dotScale, xPosAxis } = this;
    const enter = dots.enter();
    const exit = dots.exit();

    dots
      .transition()
      .duration(this.opts.duration)
      .attr(
        "cx",
        (d) =>
          Number(xPosAxis(String(d.xPos))) * (rectWidth + 1) + rectWidth / 2
      )
      .attr(
        "cy",
        (d) =>
          Number(xPosAxis(String(d.yPos))) * (rectWidth + 1) +
          rectWidth / 2 +
          lineHeight
      )
      .attr("r", (d) => dotScale(d.value));

    enter
      .append("circle")
      .attr("class", "dots")
      .attr("opacity", "0.5")
      .attr(
        "cx",
        (d) =>
          Number(xPosAxis(String(d.xPos))) * (rectWidth + 1) + rectWidth / 2
      )
      .attr(
        "cy",
        (d) =>
          Number(xPosAxis(String(d.yPos))) * (rectWidth + 1) +
          rectWidth / 2 +
          lineHeight
      )
      .attr("fill", this.opts.mainColor)
      .attr(
        "transform",
        `translate(${this.opts.padding}, ${this.opts.padding + rectWidth})`
      )
      .transition()
      .duration(this.opts.duration)
      .attr("r", (d) => dotScale(d.value));

    exit.transition().duration(this.opts.duration).attr("r", 0).remove();
  }

  public update(data: axisHeatMapOptionData): void {
    this.handleData(data);
    this.draw();
  }
}
