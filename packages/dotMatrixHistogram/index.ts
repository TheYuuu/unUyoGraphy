import ChartBase, { defaultOptions, defaultOpts } from '@/src/lib/chartBase';

import { ScaleLinear, Selection, BaseType, ScaleOrdinal, schemeCategory10 } from 'd3';
import { min, max } from 'd3-array';
import { scaleLinear, scaleOrdinal } from 'd3-scale';
import { seriesX } from './sample';

export interface opts extends defaultOpts {};

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
    ...this._opts
  };

  private data: dotMatrixHistogramOptionData | null = null

  private yAxis_g: Selection<SVGGElement, unknown, null, undefined> | null = null;
  private xAxis_g: Selection<SVGGElement, unknown, null, undefined> | null = null;
  private dot_g: Selection<SVGGElement, unknown, null, undefined> | null = null;

  private xPosAxis: ScaleLinear<number, number, never> = scaleLinear();

  private dotWidth: number = 0;
  private maxHieght: number = 0;

  constructor (opt: dotMatrixHistogramOptions) {
    super(opt);

    this.init();
    this.update(opt.data);
  }

  private init() {
    if (!this.ctx) {
      throw new Error('No useful ctx');
      return;
    }

    this.yAxis_g = this.ctx.append('g');
    this.xAxis_g = this.ctx.append('g');
    this.dot_g = this.ctx.append('g');
  }

  public update(data: dotMatrixHistogramOptionData): void {
    this.handleDate(data);
    this.draw();
  }

  private handleDate(data: dotMatrixHistogramOptionData): void {
    const bars = 3;
    const barPadding = 2;

    this.dotWidth = (this.containerWidth - barPadding * data.seriesX.length) / data.seriesX.length / bars;
    const maxNumber = max(data.data.map((item)  => {
      return item.data.length;
    }));

    if (maxNumber) {
      this.maxHieght = Math.ceil(maxNumber / bars) * this.dotWidth;
    } else {
      throw new Error('get dots numbers error');
    }

    this.data = data;
  }

  private draw(): void {
    const { dot_g, data } = this;

    const xPosAxis = scaleLinear()
      .domain([0, (this.data?.seriesX || []).length])
      .range([0, this.containerWidth]);

    this.xPosAxis = xPosAxis;

    if (!dot_g || !data) {
      return;
    }

    (data.data || []).forEach((item, index) => {
      const dots = dot_g.selectAll(`.dots-${item.seriesX}`)
                     .data(item.data);

      // if (index === 0) {
        this.updateDots(dots, index);
      // }
    })
  }

  private updateDots(dots: Selection<BaseType, dotMatrixHistogramDotData, SVGGElement, unknown>, index: number): void {
    const { xPosAxis, dotWidth, containerHeight } = this;
    const color = scaleOrdinal(schemeCategory10);

    const enter = dots.enter();
    const exit = dots.exit();

    enter
    .append('circle')
    .attr('class', 'dots')
    .attr('opacity', '0.5')
    .attr('cx', (d, i) =>  {
      return Number(xPosAxis(index)) + ((i % 3) * dotWidth);
    })
    .attr('cy', (d, i) => {
      return containerHeight - (Math.floor(i / 3) * dotWidth);
    })
    .attr('fill', d => color(d.seriesType))
    .attr('transform', `translate(${ this.opts.padding }, ${ this.opts.padding})`)
    .attr('r', d => dotWidth / 2)
    .transition()
    .duration(this.opts.duration);

    exit
    .transition()
    .duration(this.opts.duration)
    .attr('r', 0)
    .remove()
  }
}