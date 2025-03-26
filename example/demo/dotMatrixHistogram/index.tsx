import React, { useState, useEffect } from "react";

import { Button } from "antd";

// import MarkdownContent from '@lib/markdownContent';
// import contributing from './contributing.md';

import DemoModel from "../demoModel";
import docs from "./docs";

import { DotMatrixHistogram } from "@/packages/index";
import sampleData from "./sample";

const containerStyle = {
  width: "600px",
  height: "200px",
  marginBottom: "20px",
};

export default function DotMatrixHistogramDemo() {
  const [dotMatrixHistogram, setDotMatrixHistogram] = useState<InstanceType<
    typeof DotMatrixHistogram
  > | null>(null);

  useEffect(() => {
    setDotMatrixHistogram(
      new DotMatrixHistogram({
        dom: "#container",
        data: {
          data: sampleData().data,
          seriesX: sampleData().seriesX,
          seriesTypes: sampleData().seriesTypes,
        },
        Opts: {},
      })
    );
  }, []);

  const update = () => {
    if (dotMatrixHistogram) {
      dotMatrixHistogram.update({
        data: sampleData().data,
        seriesX: sampleData().seriesX,
        seriesTypes: sampleData().seriesTypes,
      });
    }
  };

  return (
    <section>
      <section>
        <div id="container" style={containerStyle}></div>
        <Button onClick={() => update()} type="primary">
          update
        </Button>
      </section>
      <DemoModel docs={docs}></DemoModel>
      {/* <section className="mt-lg">
        <MarkdownContent content={contributing}></MarkdownContent>
      </section> */}
    </section>
  );
}
