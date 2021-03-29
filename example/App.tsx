import * as React from "react";

import unUyo from '../src/index';

export interface HelloProps { compiler: string; framework: string; }

const containerStyle = {
  width: '800px',
  height: '800px'
}

export class App extends React.Component<HelloProps, {}> {
  componentDidMount() {
    const axisHeadMap =  new unUyo.AxisHeadMap({
      dom: '#container',
      mode: 'svg',
      opts: {
        data: [
          {
            value: 2,
            xPos: '',
            yPos: 'sss'
          },
        ],
        seriesX: [],
        seriesY: []
      }
    });

    console.log(axisHeadMap)
  }

  render() {
    return <div id="container" style={containerStyle}></div>;
  }
}