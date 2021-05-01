
import React, { useState, useEffect } from "react";

import unUyo from '@/src/index';

import DemoModel from '../demoModel';
import docs from './docs';

// import MarkdownContent from '@lib/markdownContent';
// import contributing from './contributing.md';

const { DotMatrixHistogram } = unUyo;

const containerStyle = {
  width: '500px',
  height: '400px'
}

export default function DotMatrixHistogramDemo() {
  const [dotMatrixHistogram, setDotMatrixHistogram] = useState<InstanceType<typeof DotMatrixHistogram> | null>(null);

  useEffect(() => {
    setDotMatrixHistogram(new DotMatrixHistogram({
      dom: '#container',
      data: {},
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
  