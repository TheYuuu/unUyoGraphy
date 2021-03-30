import { defaultOptions } from './base';

export interface AxisHeadMapData {
  value: number;
  xPos: string | number;
  yPos: string | number;
}

export interface seriesData {
  name: string;
  value: number;
}

export interface AxisHeadMapOptionData {
  data: AxisHeadMapData[];
  seriesX: string[];
  seriesY: string[];
}

export interface AxisHeadMapOptionHandledData {
  data: AxisHeadMapData[];
  seriesX: seriesData[];
  seriesY: seriesData[];
}

export interface AxisHeadMapOptions extends defaultOptions {
  opts: AxisHeadMapOptionData;
}