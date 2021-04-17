import { Selection } from 'd3';
export interface defaultOptions {
    dom: string | HTMLElement;
    data: any;
    mode?: 'svg' | 'canvas';
    opts?: defaultOpts;
}
export interface defaultOpts {
    padding?: number;
    duration?: number;
}
export default class ChartBase {
    ctx: Selection<SVGSVGElement, unknown, null, undefined> | null;
    _opts: {
        padding: number;
        duration: number;
    };
    containerWidth: number;
    containerHeight: number;
    constructor(opt: defaultOptions);
    updateGraph(): Promise<any>;
}
