import ChartBase, { defaultOptions, defaultOpts } from '../chartBase';

import { Selection, ScaleBand, BaseType, Axis, NumberValue } from 'd3';
import { max } from 'd3-array';
import { scaleLinear, scaleBand } from 'd3-scale';
import { axisBottom, axisLeft } from 'd3-axis';
import 'd3-transition';

export interface opts extends defaultOpts {
  bars?: number;
  barPadding?: number;
  colors?: string[];
};

export interface dotMatrixHistogramDotData {
  seriesType: string;
}

export interface dotMatrixHistogramData {
  seriesX: string;
  data: dotMatrixHistogramDotData[]
}

export interface dotMatrixHistogramOptionData {
  data: dotMatrixHistogramData[];
  seriesX: string[];
  seriesTypes: string[];
}

export interface dotMatrixHistogramOptions extends defaultOptions {
  data: dotMatrixHistogramOptionData;
  opts?: opts
}

export default class DotMatrixHistogram extends ChartBase {
  private opts = {
    ...this._opts,
    bars: 3,
    barPadding: 5,
    bottomPadding: 5,
    leftPadding: 20,
    colors: ['#96BBDA', '#FFC194', '#9ED19A', '#EF9997', '#CAB3DF', '#C6ABA6'] 
  };

  private data: dotMatrixHistogramOptionData | null = null

  private yAxis_g: Selection<SVGGElement, unknown, null, undefined> | null = null;
  private xAxis_g: Selection<SVGGElement, unknown, null, undefined> | null = null;
  private dot_g: Selection<SVGGElement, unknown, null, undefined> | null = null;

  private xPosAxis: ScaleBand<string> = scaleBand();
  private colorMap: {
    [key: string]: string
  } = {};
  private dotWidth: number = 0;
  private maxHieght: number = 0;

  constructor (opt: dotMatrixHistogramOptions) {
    super(opt);

    this.init();
    this.update(opt.data);
  }

  private init() {
    const { leftPadding, bottomPadding } = this.opts;

    if (!this.ctx) {
      throw new Error('No useful ctx');
      return;
    }

    this.yAxis_g = this.ctx.append('g');
    this.xAxis_g = this.ctx.append('g');
    this.dot_g = this.ctx.append('g');
    this.colorMap = {};

    this.containerWidth -= leftPadding;
    this.containerHeight -= bottomPadding;
  }

  public update(data: dotMatrixHistogramOptionData): void {
    this.handleDate(data);
    this.draw();
  }

  private handleDate(data: dotMatrixHistogramOptionData): void {
    const { bars, barPadding, colors } = this.opts;

    this.dotWidth = (this.containerWidth - barPadding * data.seriesX.length) / data.seriesX.length / bars;
    const maxNumber = max(data.data.map((item)  => {
      return item.data.length;
    }));

    if (maxNumber) {
      this.maxHieght = Math.ceil(maxNumber / bars) * this.dotWidth;
    } else {
      throw new Error('get dots numbers error');
    }

    (data?.seriesTypes || []).forEach((t, i) => {
      this.colorMap[t] = colors[i];
    });

    this.data = data;
  }

  private draw(): void {
    const { dot_g, xAxis_g, data, maxHieght } = this;
    const { padding } = this.opts;

    const xPosAxis = scaleBand()
      .domain(this.data?.seriesX || [])
      .range([0, this.containerWidth]);

    this.xPosAxis = xPosAxis;

    if (!dot_g || !data) {
      return;
    }

    (data.data || []).forEach((item, index) => {
      const dots = dot_g.selectAll(`.dots-${item.seriesX}`)
                     .data(item.data);

      this.updateDots(dots, item.seriesX);
    })

    if (!xAxis_g) {
      return;
    }

    const xAxis = axisBottom(xPosAxis)
      .ticks(3)
      .tickSize(padding);
    this.updateXAxis(xAxis);

    const yPosAxis = scaleLinear()
      .domain([0, (max(data.data.map(v => v.data.length)) || 0)])
      .range([maxHieght, 0]);

    const yAxis = axisLeft(yPosAxis)
                  .ticks(3)
                  .tickSize(padding);
    this.updateYAxis(yAxis);
  }

  private updateDots(dots: Selection<BaseType, dotMatrixHistogramDotData, SVGGElement, unknown>, seriesX: string): void {
    const { xPosAxis, dotWidth, containerHeight, colorMap } = this;
    const { bottomPadding, duration, leftPadding, padding } = this.opts;

    const enter = dots.enter();
    const exit = dots.exit();

    exit
      .transition()
      .duration(duration / 2)
      .attr('cy', (d, i) => {
        return containerHeight - (Math.floor(i / 3) * dotWidth) - 2 * dotWidth;
      })
      .attr('r', 0)
      .remove();

    dots
      .attr('fill', d => colorMap[d.seriesType])
      .attr('transform', `translate(${ padding + leftPadding }, ${ -( padding + bottomPadding)})`)
      .attr('r', d => dotWidth / 2)
      .transition()
      .duration(duration)
      .delay(duration / 4)
      .attr('cx', (d, i) =>  {
        return Number(xPosAxis(seriesX)) + ((i % 3) * dotWidth);
      })
      .attr('cy', (d, i) => {
        return containerHeight - (Math.floor(i / 3) * dotWidth);
      });

    enter
      .append('circle')
      .attr('class', `dots-${seriesX}`)
      .attr('fill', d => colorMap[d.seriesType])
      .attr('transform', `translate(${ padding + leftPadding }, ${ -( padding + bottomPadding)})`)
      .attr('cx', (d, i) =>  {
        return Number(xPosAxis(seriesX)) + ((i % 3) * dotWidth);
      })
      .attr('cy', (d, i) => {
        return containerHeight - (Math.floor(i / 3) * dotWidth) - 2 * dotWidth;
      })
      .attr('r', 0)
      .transition()
      .duration(duration)
      .delay(duration / 2)
      .attr('r', dotWidth / 2)
      .attr('cy', (d, i) => {
        return containerHeight - (Math.floor(i / 3) * dotWidth);
      });
  }

  private updateYAxis(axis: Axis<NumberValue>): void {
    const { yAxis_g, containerHeight, maxHieght } = this;
    const { bottomPadding, duration, leftPadding, padding } = this.opts;

    if (!yAxis_g) {
      return;
    }
    yAxis_g
      .attr('transform', `translate(${ padding + leftPadding }, ${ ( containerHeight - maxHieght - bottomPadding - padding )})`)
      .transition()
      .duration(duration)
      .call(axis);

    yAxis_g.selectAll('path').remove();
    yAxis_g.selectAll('line').remove();
    yAxis_g.selectAll('text').attr('fill', '#a09b9b');
  }

  private updateXAxis(axis: Axis<string>): void {
    const { xAxis_g, containerHeight, maxHieght } = this;
    const { bottomPadding, duration, leftPadding, padding } = this.opts;

    if (!xAxis_g) {
      return;
    }
    xAxis_g
      .attr('transform', `translate(${ leftPadding }, ${ ( containerHeight - bottomPadding - padding )})`)
      .transition()
      .duration(duration)
      .call(axis);

    xAxis_g.selectAll('path').remove();
    xAxis_g.selectAll('line').remove();
    xAxis_g.selectAll('text').attr('fill', '#a09b9b');
  }
}