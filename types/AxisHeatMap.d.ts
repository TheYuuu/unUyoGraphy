import * as defaultOptionsTypes from './base';

export interface AxisHeatMapData {
  value: number;
  xPos: string | number;
  yPos: string | number;
}

export interface seriesData {
  name: string;
  value: number;
}

export interface AxisHeatMapOptionData {
  data: AxisHeatMapData[];
  seriesX: string[];
  seriesY: string[];
}

export interface AxisHeatMapOptionHandledData {
  data: AxisHeatMapData[];
  seriesX: seriesData[];
  seriesY: seriesData[];
}

export interface opts extends defaultOptionsTypes.opts {
  mainColor?: string;
}

export interface AxisHeatMapOptions extends defaultOptionsTypes.defaultOptions {
  data: AxisHeatMapOptionData;
  opts?: opts
}