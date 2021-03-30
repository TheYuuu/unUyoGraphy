import { ChartBase } from '../../src/lib/chartBase';
import * as AHMOptions from '../../types/AxisHeadMap';

import { select, Selection } from 'd3';

export default class AxisHeadMap extends ChartBase {
  private data: AHMOptions.AxisHeadMapOptionHandledData = {
    data: [],
    seriesX: [],
    seriesY: []
  }

  constructor (opt: AHMOptions.AxisHeadMapOptions) {
    super(opt);

    this.handleData(opt.opts);
    this.draw();
  }

  private handleData(data: AHMOptions.AxisHeadMapOptionData): void {
    const seriesXIndexMap: {
      [key: string]: number
    } = {};

    const seriesYIndexMap: {
      [key: string]: number
    } = {};

    const seriesXData: AHMOptions.seriesData[] = [];
    const seriesYData: AHMOptions.seriesData[] = [];

    for (let i = 0; i < data.seriesX.length; i++) {
      seriesXIndexMap[data.seriesX[i]] = i;
      seriesXData.push({
        name: data.seriesX[i],
        value: 0
      });
    }

    for (let i = 0; i < data.seriesY.length; i++) {
      seriesYIndexMap[data.seriesY[i]] = i;
      seriesYData.push({
        name: data.seriesY[i],
        value: 0
      });
    }

    const dataMap: {
      [key: string]: {
        [key: string]: number
      }
    } = {};

    const dataArr: AHMOptions.AxisHeadMapData[] = [];

    for (let i = 0; i < data.data.length; i++) {
      if (!dataMap[data.data[i].xPos]) {
        dataMap[data.data[i].xPos] = {};
      }

      if (!dataMap[data.data[i].xPos][data.data[i].yPos]) {
        dataMap[data.data[i].xPos][data.data[i].yPos] = 0;
      }

      dataMap[data.data[i].xPos][data.data[i].yPos] += data.data[i].value;

      seriesXData[seriesXIndexMap[data.data[i].xPos]].value++;
      seriesYData[seriesYIndexMap[data.data[i].yPos]].value++;
    }

    for (let k1 in dataMap) {
      for (let k2 in dataMap[k1]) {
        dataArr.push({
          value: dataMap[k1][k2],
          xPos: k1,
          yPos: k2
        });
      }
    }

    this.data = {
      data: dataArr,
      seriesX: seriesXData,
      seriesY: seriesYData
    };
  }

  private draw(): void {
    console.log(this.data);
  }
}