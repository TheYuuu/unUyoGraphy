import { defaultOptions } from '../../types/base';
import { isString } from './Tool';

import { select, Selection } from 'd3';

export class ChartBase {
  public ctx: Selection<SVGSVGElement, unknown, null, undefined> | null = null;
  public containerWidth: number = 0;
  public containerHeight: number = 0;

  constructor(opt: defaultOptions) {
    let qdom: HTMLElement | null = null;
    if (isString(opt.dom)) {
      const qd  = document.querySelector(opt.dom);
      qd && (qdom = qd as HTMLElement);
    } else {
      qdom = opt.dom;
    }

    if (!qdom) throw new Error('No Dom Selected!');

    this.containerWidth = qdom.offsetWidth;
    this.containerHeight = qdom.offsetHeight;

    if (opt.mode === 'svg') {
      this.ctx = select(qdom)
        .append('svg')
        .attr('width', this.containerWidth)
        .attr('height', this.containerHeight);
    }
  }

  public async updateGraph():Promise<any> {};
}