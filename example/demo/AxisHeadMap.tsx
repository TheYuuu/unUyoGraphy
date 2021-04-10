import * as React from "react";

import { AxisHeadMap } from '../../src/index';
import sampleData from '../../packages/AxisHeadMap/sample';

import { Button } from 'antd';

const containerStyle = {
  width: '500px',
  height: '400px'
}
export default class AxisHeadMapDemo extends React.Component {
  private axisHeadMap:  InstanceType<typeof AxisHeadMap> | null = null;

  componentDidMount() {
    const axisHeadMap: InstanceType<typeof AxisHeadMap> =  new AxisHeadMap({
      dom: '#container',
      mode: 'svg',
      data: {
        data: sampleData().data,
        seriesX: sampleData().xPos,
        seriesY: sampleData().yPos
      }
    });

    this.axisHeadMap = axisHeadMap;
  }

  update() {
    if (this.axisHeadMap) {
      this.axisHeadMap.update({
        data: sampleData().data,
        seriesX: sampleData().xPos,
        seriesY: sampleData().yPos
      });
    }
  }

  render() {
    return (
      <section>
        <div id="container" style={containerStyle}></div>
        <Button onClick={() => this.update()} type="primary">update</Button>
      </section>
    );
  }
}