import ChartBase, { defaultOptions, defaultOpts } from '@/src/lib/chartBase';
export interface opts extends defaultOpts {
    bars?: number;
    barPadding?: number;
    colors?: string[];
}
export interface dotMatrixHistogramDotData {
    seriesType: string;
}
export interface dotMatrixHistogramData {
    seriesX: string;
    data: dotMatrixHistogramDotData[];
}
export interface dotMatrixHistogramOptionData {
    data: dotMatrixHistogramData[];
    seriesX: string[];
    seriesTypes: string[];
}
export interface dotMatrixHistogramOptions extends defaultOptions {
    data: dotMatrixHistogramOptionData;
    opts?: opts;
}
export default class DotMatrixHistogram extends ChartBase {
    private opts;
    private data;
    private yAxis_g;
    private xAxis_g;
    private dot_g;
    private xPosAxis;
    private colorMap;
    private dotWidth;
    private maxHieght;
    constructor(opt: dotMatrixHistogramOptions);
    private init;
    update(data: dotMatrixHistogramOptionData): void;
    private handleDate;
    private draw;
    private updateDots;
    private updateYAxis;
    private updateXAxis;
}
