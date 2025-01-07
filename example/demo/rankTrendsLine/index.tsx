
import React, { useState, useEffect } from "react";

import DemoModel from '../demoModel';
import docs from './docs';

// import MarkdownContent from '@lib/markdownContent';
// import contributing from './contributing.md';

import { RankTrendsLine } from '@/packages/index';

const containerStyle = {
  width: '500px',
  height: '400px'
}

export default function RankTrendsLineDemo() {
  const [rankTrendsLine, setRankTrendsLine] = useState<InstanceType<typeof RankTrendsLine> | null>(null);

  useEffect(() => {
    console.log(123, RankTrendsLine);
    setRankTrendsLine(new RankTrendsLine({
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
  