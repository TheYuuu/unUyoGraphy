import { ChartBase } from '../../src/lib/chartBase';
import * as AHMOptionsTypes from '../../types/AxisHeadMap';

import * as d3 from 'd3';

export default class AxisHeadMap extends ChartBase {
  private data: AHMOptionsTypes.AxisHeadMapOptionHandledData = {
    data: [],
    seriesX: [],
    seriesY: []
  }

  private opts : AHMOptionsTypes.opts = {
    ...this._opts,
    mainColor: 'rgb(107 3 24)'
  };

  constructor (opt: AHMOptionsTypes.AxisHeadMapOptions) {
    super(opt);

    this.handleData(opt.opts);
    this.draw();
  }

  private handleData(data: AHMOptionsTypes.AxisHeadMapOptionData): void {
    const seriesXIndexMap: {
      [key: string]: number
    } = {};

    const seriesYIndexMap: {
      [key: string]: number
    } = {};

    const seriesXData: AHMOptionsTypes.seriesData[] = [];
    const seriesYData: AHMOptionsTypes.seriesData[] = [];

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

    const dataArr: AHMOptionsTypes.AxisHeadMapData[] = [];

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
    if (!this.ctx) {
      throw new Error('No useful ctx');
      return;
    }

    const topMaxX = d3.max(this.data.seriesX.map(v => v.value));
    if (topMaxX === undefined) {
      throw new Error();
      return;
    }
    
    const lineHeight = this.containerHeight * 0.2;
    const topScale = d3.scaleLinear()
                        .domain([0, topMaxX])
                        .range([0, lineHeight]);

    const top_g = this.ctx.append('g');
    const maxLen = this.containerHeight < this.containerWidth ? this.containerHeight : this.containerWidth;
    const topXAxisWidth = maxLen * 0.7 - this.data.seriesX.length;
    const rectWidth = topXAxisWidth / this.data.seriesX.length;

    const topRects = top_g.selectAll('topRects')
                          .data(this.data.seriesX)
                          .enter()
                          .append('rect')
                          .attr('class', 'topRects')
                          .attr("width", rectWidth)
                          .attr("height", (d) => topScale(d.value))
                          .attr("x", (d, i) => i * (rectWidth + 1))
                          .attr("y", (d, i) => lineHeight - topScale(d.value))
                          .attr('fill', this.opts.mainColor)
                          .attr('transform', `translate(${ this.opts.padding }, ${ this.opts.padding })`);

    const rightMaxY = d3.max(this.data.seriesY.map(v => v.value));
    if (rightMaxY === undefined) {
      throw new Error();
      return;
    }

    const leftScale = d3.scaleLinear()
                        .domain([0, rightMaxY])
                        .range([0, lineHeight]);
    
    const left_g = this.ctx.append('g');
    const leftRects = left_g.selectAll('.leftRects')
                          .data(this.data.seriesX)
                          .enter()
                          .append('rect')
                          .attr('class', 'leftRects')
                          .attr("width", (d) => leftScale(d.value))
                          .attr("height", rectWidth)
                          .attr('x', topXAxisWidth)
                          .attr("y", (d, i) => (i * (rectWidth + 1)) + this.containerHeight * 0.2)
                          .attr('fill', this.opts.mainColor)
                          .attr('transform', `translate(${ this.opts.padding + this.data.seriesX.length + rectWidth }, ${ this.opts.padding + rectWidth})`);

    const xPosAxis = d3.scaleOrdinal()
                       .domain(this.data.seriesX.map(v => v.name))
                       .range(new Array(this.data.seriesX.length).fill(0).map((item, index) => index));

    const yPosAxis = d3.scaleOrdinal()
                       .domain(this.data.seriesY.map(v => v.name))
                       .range(new Array(this.data.seriesY.length).fill(0).map((item, index) => index));

    const dotR = rectWidth / 4;
    const minDot = d3.min(this.data.data.map(v => Number(v.value))) || 0;
    const maxDot = d3.max(this.data.data.map(v => Number(v.value))) || 0;
    const dotScale = d3.scaleLinear()
                       .domain(
                        [minDot, maxDot])
                       .range([minDot === 0 ? 0 : dotR, dotR * 5]);


    const dot_g = this.ctx.append('g');
    const dots = dot_g.selectAll('.dots')
                      .data(this.data.data)
                      .enter()
                      .append('circle')
                      .attr('r', d => dotScale(d.value))
                      .attr('opacity', '0.3')
                      .attr('cx', (d) =>   Number(xPosAxis(String(d.xPos))) * (rectWidth + 1) + rectWidth / 2)
                      .attr('cy', (d) => Number(xPosAxis(String(d.yPos))) * (rectWidth + 1) + rectWidth / 2 + lineHeight)
                      .attr('fill', this.opts.mainColor)
                      .attr('transform', `translate(${ this.opts.padding }, ${ this.opts.padding + rectWidth})`);
    
  }
}