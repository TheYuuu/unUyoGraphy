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
    ...this._opts,
    bottomPadding: 10,
    leftPadding: 20
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
    const { leftPadding, padding } = this.opts;

    const bars = 3;
    const barPadding = 2;

    this.containerWidth -= leftPadding;
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
    const { dot_g, xAxis_g, data } = this;

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

      this.updateDots(dots, index, `.dots-${item.seriesX}`);
    })

    if (!xAxis_g) {
      return;
    }

    
    const labels = xAxis_g.selectAll(`.label`)
                      .data(data.seriesX);
    this.updateLabels(labels);
  }

  private updateDots(dots: Selection<BaseType, dotMatrixHistogramDotData, SVGGElement, unknown>, index: number, className: string): void {
    const { xPosAxis, dotWidth, containerHeight } = this;
    const { bottomPadding, duration, leftPadding, padding } = this.opts;
    const color = scaleOrdinal(schemeCategory10);

    const enter = dots.enter();
    const exit = dots.exit();

    dots
      .attr('opacity', '0.5')
      .attr('cx', (d, i) =>  {
        return Number(xPosAxis(index)) + dotWidth + ((i % 3) * dotWidth);
      })
      .attr('cy', (d, i) => {
        return containerHeight - (Math.floor(i / 3) * dotWidth);
      })
      .attr('fill', d => color(d.seriesType))
      .attr('transform', `translate(${ padding + leftPadding }, ${ -( padding + bottomPadding)})`)
      .attr('r', d => dotWidth / 2)
      .transition()
      .duration(duration);

    enter
      .append('circle')
      .attr('class', className)
      .attr('opacity', '0.5')
      .attr('cx', (d, i) =>  {
        return Number(xPosAxis(index)) + ((i % 3) * dotWidth);
      })
      .attr('cy', (d, i) => {
        return containerHeight - (Math.floor(i / 3) * dotWidth);
      })
      .attr('fill', d => color(d.seriesType))
      .attr('transform', `translate(${ padding + leftPadding }, ${ -( padding + bottomPadding)})`)
      .attr('r', d => dotWidth / 2)
      .transition()
      .duration(duration);

    exit
    .transition()
    .duration(duration)
    .attr('r', 0)
    .remove()
  }

  private updateLabels(labels: Selection<BaseType, string, SVGGElement, unknown>): void {
    const { xPosAxis, containerHeight } = this;
    const { duration, leftPadding, padding } = this.opts;

    const enter = labels.enter();
    const exit = labels.exit();

    labels
      .text(d => d)
      .attr('font-size', '12px')
      .attr('font-family', 'fantasy')
      .attr('fill', '#a09b9b')
      .attr('transform', `translate(${ padding + leftPadding }, ${0})`)
      .attr('x', (d, i) =>  {
        return Number(xPosAxis(i));
      })
      .attr('y', containerHeight)

    enter
      .append('text')
      .attr('class', 'label')
      .text(d => d)
      .attr('font-size', '12px')
      .attr('font-family', 'fantasy')
      .attr('fill', '#a09b9b')
      .attr('transform', `translate(${ padding + leftPadding }, ${0})`)
      .attr('x', (d, i) =>  {
        return Number(xPosAxis(i));
      })
      .attr('y', containerHeight)

    exit
      .transition()
      .duration(duration)
      .attr('opacity', 0)
      .remove()
  }
}