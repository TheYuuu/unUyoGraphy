import * as defaultOptionsTypes from '../../types/base';
import { isString, isNumber } from './Tools';

import { select, Selection } from 'd3';

export class ChartBase {
  // 画布
  public ctx: Selection<SVGSVGElement, unknown, null, undefined> | null = null;

  // 图形设置
  public _opts = {
    padding: 5,
    duration: 800
  }

  // 绘图有效宽度
  public containerWidth: number = 0;
  
  // 绘图有效宽度
  public containerHeight: number = 0;

  constructor(opt: defaultOptionsTypes.defaultOptions) {
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

    // if (opt.mode === 'svg') {
    this.ctx = select(qdom)
      .append('svg')
      .attr('width', this.containerWidth)
      .attr('height', this.containerHeight);
    // }

    this._opts = Object.assign(this._opts, opt.opts || {});

    this.containerWidth -= (isNumber(this._opts.padding) ? 2 * this._opts.padding: 0);
    this.containerHeight -= (isNumber(this._opts.padding) ? 2 * this._opts.padding: 0);
  }

  public async updateGraph(): Promise<any> {};
}