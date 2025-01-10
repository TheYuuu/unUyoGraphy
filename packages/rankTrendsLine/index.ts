import {
  Selection,
  line,
  max,
  curveMonotoneX,
  easeLinear,
  select,
  selectAll,
} from "d3";

import ChartBase, { defaultOptions, defaultOpts } from "../chartBase";

export interface opts extends defaultOpts {
  colors?: string[];
  xPadding?: number;
  yPadding?: number;
  dotWidth?: number;
}

export interface rankTrendsLineOptionData {
  xPos: string[];
  series: Array<{
    name: string;
    values: number[];
  }>;
}

export interface rankTrendsLineOptions extends defaultOptions {
  data: rankTrendsLineOptionData;
  opts?: opts;
}

export default class RankTrendsLine extends ChartBase {
  private opts = {
    colors: [
      "#96BBDA",
      "#FFC194",
      "#9ED19A",
      "#EF9997",
      "#CAB3DF",
      "#C6ABA6",
      "#c5c1c1",
    ],
    xPadding: 80,
    yPadding: 50,
    dotWidth: 20,
    ...this._opts,
  };

  private line_g!: Selection<SVGGElement, unknown, null, undefined>;
  private dot_g!: Selection<SVGGElement, unknown, null, undefined>;

  private data!: rankTrendsLineOptionData;

  private xStep!: number;
  private yStep!: number;

  private getXPos!: (index: number) => number;

  private initFlag = false;

  constructor(opt: rankTrendsLineOptions) {
    super(opt);

    this.init(opt.data);
    this.update();
  }

  private init(data: rankTrendsLineOptionData) {
    if (!this.ctx) {
      throw new Error("No useful ctx");
    }

    this.line_g = this.ctx.append("g");
    this.dot_g = this.ctx.append("g");
    this.data = data;

    const maxRank = max(data.series.map((el) => el.values).flat());

    this.xStep =
      (this.containerWidth - this.opts.xPadding * 2) / (data.xPos.length + 1);

    this.yStep =
      (this.containerHeight - this.opts.yPadding * 2) / (maxRank! - 1);

    this.getXPos = (index: number) => {
      if (index === 0) {
        return this.opts.xPadding;
      }

      if (index === 1) {
        return this.opts.xPadding + this.xStep / 2;
      }

      if (index === data.xPos.length) {
        return this.containerWidth - this.opts.xPadding - this.xStep / 2;
      }

      return index * this.xStep + this.opts.xPadding;
    };
  }

  public update(data?: rankTrendsLineOptionData): void {
    data && (this.data = data);

    this.updateLine();

    this.updateCircle(0);
    this.updateCircle(1);
    this.updateCircle(2);

    this.initFlag = true;
  }

  public updateLine() {
    const { line_g, opts, data, yStep, getXPos, initFlag } = this;

    const lines = line_g.selectAll(".rankLine").data(data.series);

    const enter = lines.enter();
    const exit = lines.exit();

    const p = line()
      .x(function (d, i) {
        return getXPos(d[0]);
      })
      .y(function (d, i) {
        return d[1] * yStep;
      })
      .curve(curveMonotoneX);

    const pathRe = (d: rankTrendsLineOptionData["series"][number]) => {
      const realArr = data.xPos.map((el, index) => [
        index + 1,
        d.values[index],
      ]);

      const arr = [
        [0, d.values[0]],
        ...realArr,
        [data.xPos.length + 1, d.values[d.values.length - 1]],
      ] as [number, number][];

      return p(arr);
    };

    exit
      .transition()
      .duration(opts.duration / 2)
      .remove();

    lines
      .transition()
      .duration(opts.duration)
      .attr("d", pathRe)
      .attr("stroke-dasharray", 0);

    enter
      .append("path")
      .attr("class", "rankLine")
      .attr("stroke", (d, i) => opts.colors[i])
      .attr("stroke-width", "5px")
      .attr("fill", "none")
      .attr("d", pathRe);

    const getLen = (node: any) => {
      const totalLength = select(node).node()!.getTotalLength();
      return totalLength;
    };

    if (!initFlag) {
      selectAll(".rankLine")
        .attr("stroke-dasharray", function (d, i) {
          return getLen(this) + " " + getLen(this);
        })
        .attr("stroke-dashoffset", function () {
          return getLen(this);
        })
        .transition()
        .duration(opts.duration * 1.5)
        .ease(easeLinear)
        // .delay((d, i) => { return i * opts.duration * 0.3 })
        .attr("stroke-dashoffset", 0);
    }
  }

  public updateCircle(index: number) {
    const { dot_g, opts, data, yStep, getXPos } = this;

    const dots = dot_g.selectAll(`.circleItem_${index}`).data(data.series);

    const enter = dots.enter();
    const exit = dots.exit();

    const xIndex = index + 1;

    exit
      .transition()
      .duration(opts.duration / 2)
      .remove();

    dots
      .transition()
      .duration(opts.duration)
      .attr("cx", getXPos(xIndex))
      .attr("cy", (d, i) => {
        return d.values[index] * yStep;
      });

    enter
      .append("circle")
      .attr("class", `circleItem_${index}`)
      .attr("fill", (d, i) => opts.colors[i])
      .attr("cx", getXPos(xIndex) - 20)
      .attr("cy", (d, i) => {
        return d.values[index] * yStep;
      })
      .transition()
      .duration(opts.duration)
      .delay(opts.duration * 0.5 * index)
      .attr("cx", getXPos(xIndex))
      .attr("r", 10);
  }
}
