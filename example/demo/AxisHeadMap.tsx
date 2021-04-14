import React, { useState, useEffect } from "react";

import { AxisHeadMap } from '../../src/index';
import sampleData from '../../packages/AxisHeadMap/sample';

import { Button } from 'antd';

const containerStyle = {
  width: '500px',
  height: '400px'
}

export default function AxisHeadMapDemo() {
  const [axisHeadMap, setaxisHeadMap] = useState<InstanceType<typeof AxisHeadMap> | null>(null);

  useEffect(() => {
    setaxisHeadMap(new AxisHeadMap({
      dom: '#container',
      mode: 'svg',
      data: {
        data: sampleData().data,
        seriesX: sampleData().xPos,
        seriesY: sampleData().yPos
      }
    }))
  }, [])

  return (
    <section>
      <div id="container" style={containerStyle}></div>
      <Button onClick={() => update()} type="primary">update</Button>
    </section>
  );


  function update() {
    if (axisHeadMap) {
      axisHeadMap.update({
        data: sampleData().data,
        seriesX: sampleData().xPos,
        seriesY: sampleData().yPos
      });
    }
  }
}