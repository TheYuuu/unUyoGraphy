import ChartBase, { defaultOptions, defaultOpts } from '../chartBase';
export interface opts extends defaultOpts {}

export interface rankTrendsLineOptionData {
}

export interface rankTrendsLineOptions extends defaultOptions {
  data: rankTrendsLineOptionData;
  opts?: opts
}

export default class RankTrendsLine extends ChartBase {
  private opts = {
    ...this._opts
  };

  constructor (opt: rankTrendsLineOptions) {
    super(opt);

    this.init();
    this.update(opt.data);
  }

  private init() {}

  public update(data: rankTrendsLineOptionData): void {}
}