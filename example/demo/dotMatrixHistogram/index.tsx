
import React, { useState, useEffect } from "react";

import unUyo from '@/src/index';
import sampleData from '@/packages/dotMatrixHistogram/sample';

import DemoModel from '../demoModel';
import docs from './docs';

// import MarkdownContent from '@lib/markdownContent';
// import contributing from './contributing.md';

const { DotMatrixHistogram } = unUyo;

const containerStyle = {
  width: '500px',
  height: '200px'
}

export default function DotMatrixHistogramDemo() {
  const [dotMatrixHistogram, setDotMatrixHistogram] = useState<InstanceType<typeof DotMatrixHistogram> | null>(null);

  useEffect(() => {
    setDotMatrixHistogram(new DotMatrixHistogram({
      dom: '#container',
      data: {
        data: sampleData().data,
        seriesX: sampleData().seriesX,
        seriesTypes: sampleData().seriesTypes
      },
      opts: {}
    }))
  }, []);

  return (
    <section>
      <section>
        <div id="container" style={containerStyle}>todo</div>
      </section>
      <DemoModel docs={docs}></DemoModel>
      {/* <section className="mt-lg">
        <MarkdownContent content={contributing}></MarkdownContent>
      </section> */}
    </section>
  );
}
  