import ChartBase, { defaultOptions, defaultOpts } from './chartBase';

export interface opts extends defaultOpts {}

export interface dotMatrixHistogramOptions extends defaultOptions {
    data: dotMatrixHistogramData;
    opts?: opts;
}

export default class DotMatrixHistogram extends ChartBase {
    private data;
    private opts;
    constructor(opt: dotMatrixHistogramOptions);
    update(data: dotMatrixHistogramOptionData): void;
}
  