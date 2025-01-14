import {
  Selection,
  line,
  max,
  curveMonotoneX,
  easeLinear,
  select,
  selectAll,
  easeBounce,
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
    xPosLabelColor: "#a0a4a9",
    xPadding: 80,
    yPadding: 50,
    dotWidth: 10,
    lineStrokeWidth: 5,
    labelFontSize: 14,
    ...this._opts,
  };

  private line_g!: Selection<SVGGElement, unknown, null, undefined>;
  private dot_g!: Selection<SVGGElement, unknown, null, undefined>;
  private label_g!: Selection<SVGGElement, unknown, null, undefined>;
  private xPosLabel_g!: Selection<SVGGElement, unknown, null, undefined>;

  private data!: rankTrendsLineOptionData;

  private xStep!: number;
  private yStep!: number;

  private getXPos!: (index: number) => number;

  private initFlag = false;

  constructor(opt: rankTrendsLineOptions) {
    super(opt);
    if (!this.ctx) {
      throw new Error("No useful ctx");
    }

    this.line_g = this.ctx.append("g");
    this.dot_g = this.ctx.append("g");
    this.label_g = this.ctx.append("g");
    this.xPosLabel_g = this.ctx.append("g");

    this.init(opt.data);
    this.update();
  }

  private init(data: rankTrendsLineOptionData) {
    this.data = data;

    const maxRank = max(data.series.map((el) => el.values).flat());

    const xStep =
      (this.containerWidth - this.opts.xPadding * 2) / (data.xPos.length);

    this.xStep = xStep;

    this.yStep =
      (this.containerHeight - this.opts.yPadding * 2) / (maxRank! - 1);

    this.getXPos = (index: number) => {
      if (index === 0) {
        return this.opts.xPadding;
      }

      if (index === 1) {
        return this.opts.xPadding + xStep / 2;
      }

      if (index === data.xPos.length) {
        return this.containerWidth - this.opts.xPadding - xStep / 2;
      }

      if (index === data.xPos.length + 1) {
        return this.containerWidth - this.opts.xPadding;
      }

      return this.getXPos(index - 1) + this.xStep;
    };
  }

  public update(data?: rankTrendsLineOptionData): void {
    if (data) {
      this.data = data;
      this.init(data);
    }

    this.updateLine();

    this.updateCircle();

    this.updateSeriesLabel();

    this.updateXPosLabel();

    this.initFlag = true;
  }

  private updateLine() {
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
      .attr("stroke-width", `${opts.lineStrokeWidth}px`)
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

  private updateCircle() {
    const { dot_g, opts, data, yStep, getXPos } = this;
    const nodes = data.xPos.map((_, index) => {
      return data.series.map((item, idx) => {
        return [index + 1, item.values[index], idx];
      })
    }).flat()

    const dots = dot_g.selectAll(`.circleItem`).data(nodes);

    const enter = dots.enter();
    const exit = dots.exit();

    exit
      .transition()
      .duration(opts.duration / 2)
      .remove();

    dots
      .transition()
      .duration(opts.duration)
      .attr("cx", (d) => getXPos(d[0]))
      .attr("cy", (d, i) => {
        return (d[1]) * yStep;
      });

    enter
      .append("circle")
      .attr("class", 'circleItem')
      .attr("fill", (d, i) => opts.colors[d[2]])
      .attr("cx", (d) => getXPos(d[0]) - 20)
      .attr("cy", (d, i) => {
        return (d[1]) * yStep;
      })
      .transition()
      .duration(opts.duration)
      .delay((d) => opts.duration * 0.5 * d[0])
      .attr("cx", (d) => getXPos(d[0]))
      .attr("r", opts.dotWidth);
  }

  private updateSeriesLabel() {
    const { label_g, opts, data, yStep, getXPos } = this;

    const nodes = [0, data.xPos.length + 1].map(index => {
      return [...data.series.map((item, idx) => {
        return [index, item.values[index] ?? item.values[item.values.length - 1], idx, item.name] as const;
      })]
    }).flat();

    const labels = label_g.selectAll(`.label`).data(nodes);

    const enter = labels.enter();
    const exit = labels.exit();

    exit
      .transition()
      .duration(opts.duration / 2)
      .remove();

    labels
      .transition()
      .duration(opts.duration)
      .attr("x", (d) => getXPos(d[0]))
      .attr("y", (d, i) => {
        return d[1] * yStep;
      });

    enter
      .append("text")
      .attr("class", `label`)
      .text((d) => d[3])
      .attr("fill", (d, i) => opts.colors[d[2]])
      .attr("font-size", opts.labelFontSize)
      .attr("x", (d) => getXPos(d[0]) - 20)
      .attr("y", (d, i) => {
        return d[1] * yStep;
      })
      .attr("transform", function (d, i) {
        const item = select(this).node()?.getBBox();
        return item
          ? `translate(${d[0] === 0 ? Number(`-${item.width + 10}`) : 10}, ${
              item?.height / 4
            })`
          : null;
      })
      .style("display", "none")
      .transition()
      .duration(opts.duration)
      .delay((d) => opts.duration * 0.3 * d[0])
      .attr("x", (d) =>getXPos(d[0]))
      .style("display", "inline");
  }

  private updateXPosLabel() {
    const { label_g, opts, data, getXPos } = this;

    const labels = label_g.selectAll(`.xPosLabel`).data(data.xPos);

    const enter = labels.enter();
    const exit = labels.exit();

    exit
      .transition()
      .duration(opts.duration / 2)
      .remove();

    labels
      .transition()
      .duration(opts.duration)
      .attr("x", (d, i) => getXPos(i + 1))
      .attr("y", opts.yPadding);

    enter
      .append("text")
      .attr("class", `xPosLabel`)
      .text((d, i) => d)
      .attr("fill", opts.xPosLabelColor)
      .attr("font-size", opts.labelFontSize)
      .attr("x", (d, i) => getXPos(i + 1))
      .attr("y", opts.yPadding / 3)
      .attr("transform", function (d, i) {
        const item = select(this).node()?.getBBox();
        return item
          ? `translate(${-item.width / 2}, ${-(
              item?.height / 2 +
              opts.dotWidth
            )})`
          : null;
      })
      .style("display", "none")
      .transition()
      .duration(opts.duration)
      .ease(easeBounce)
      .delay((d, i) => opts.duration * 0.3 * i)
      .attr("y", opts.yPadding)
      .style("display", "inline");
  }
}
