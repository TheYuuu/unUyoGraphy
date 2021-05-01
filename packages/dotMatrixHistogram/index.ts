import ChartBase, { defaultOptions, defaultOpts } from '@/src/lib/chartBase';
export interface opts extends defaultOpts {}

export interface dotMatrixHistogramOptionData {
}

export interface dotMatrixHistogramOptions extends defaultOptions {
  data: dotMatrixHistogramOptionData;
  opts?: opts
}

export default class DotMatrixHistogram extends ChartBase {
  private opts = {
    ...this._opts
  };

  constructor (opt: dotMatrixHistogramOptions) {
    super(opt);

    this.init();
    this.update(opt.data);
  }

  private init() {}

  public update(data: dotMatrixHistogramOptionData): void {}
}