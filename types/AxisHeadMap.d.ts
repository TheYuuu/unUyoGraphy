import { defaultOptions } from './base';

export interface AxisHeadMapData {
  value: number;
  xPos: string | number;
  yPos: string | number;
}

export interface AxisHeadMapOptions extends defaultOptions {
  opts: {
    data: AxisHeadMapData[];
    seriesX: string | number[];
    seriesY: string | number[];
  };
}