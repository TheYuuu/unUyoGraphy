import ChartBase, { defaultOptions, defaultOpts } from '@/src/lib/chartBase';
import 'd3-transition';
export interface axisHeatMapData {
    value: number;
    xPos: string | number;
    yPos: string | number;
}
export interface seriesData {
    name: string;
    value: number;
}
export interface axisHeatMapOptionData {
    data: axisHeatMapData[];
    seriesX: string[];
    seriesY: string[];
}
export interface axisHeatMapOptionHandledData {
    data: axisHeatMapData[];
    seriesX: seriesData[];
    seriesY: seriesData[];
}
export interface opts extends defaultOpts {
    mainColor?: string;
}
export interface axisHeatMapOptions extends defaultOptions {
    data: axisHeatMapOptionData;
    opts?: opts;
}
export default class AxisHeatMap extends ChartBase {
    private data;
    private opts;
    private rectWidth;
    private topXAxisWidth;
    private leftScale;
    private lineHeight;
    private topScale;
    private dotScale;
    private xPosAxis;
    private top_g;
    private left_g;
    private dot_g;
    constructor(opt: axisHeatMapOptions);
    private handleData;
    private init;
    private draw;
    private updateTopRects;
    private updateLeftRects;
    private updateDots;
    update(data: axisHeatMapOptionData): void;
}
