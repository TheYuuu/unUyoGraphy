import * as React from "react";

import unUyo from '../src/index';

import sampleData from '../packages/AxisHeadMap/sample';

export interface HelloProps { compiler: string; framework: string; }

const containerStyle = {
  width: '500px',
  height: '400px'
}

export class App extends React.Component<HelloProps, {}> {
  componentDidMount() {
    const axisHeadMap =  new unUyo.AxisHeadMap({
      dom: '#container',
      mode: 'svg',
      opts: {
        data: sampleData().data,
        seriesX: sampleData().xPos,
        seriesY: sampleData().yPos
      }
    });

    console.log(axisHeadMap)
  }

  render() {
    return <div id="container" style={containerStyle}></div>;
  }
}