import React, { useState, useEffect } from "react";

import unUyo from '../../../src/index';
import sampleData from '../../../packages/axisHeatMap/sample';

import { Button } from 'antd';
import DemoModel from '../demoModel';

import docs from './docs';

const { AxisHeatMap } = unUyo;

const containerStyle = {
  width: '500px',
  height: '400px'
}

export default function AxisHeatMapDemo() {
  const [axisHeatMap, setAxisHeatMap] = useState<InstanceType<typeof AxisHeatMap> | null>(null);

  useEffect(() => {
    setAxisHeatMap(new AxisHeatMap({
      dom: '#container',
      mode: 'svg',
      data: {
        data: sampleData().data,
        seriesX: sampleData().xPos,
        seriesY: sampleData().yPos
      }
    }))
  }, []);

  const update = () => {
    if (axisHeatMap) {
      axisHeatMap.update({
        data: sampleData().data,
        seriesX: sampleData().xPos,
        seriesY: sampleData().yPos
      });
    }
  }

  return (
    <section>
      <section>
        <div id="container" style={containerStyle}></div>
        <Button onClick={() => update()} type="primary">update</Button>
      </section>
      <DemoModel docs={docs}></DemoModel>
    </section>
  );
}