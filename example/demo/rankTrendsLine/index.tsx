import React, { useState, useEffect } from "react";

import DemoModel from "../demoModel";
import docs from "./docs";

// import MarkdownContent from '@lib/markdownContent';
// import contributing from './contributing.md';

import { RankTrendsLine } from "@/packages/index";
import { Button } from "antd";

const containerStyle = {
  width: "800px",
  height: "400px",
};

const mockData1 = {
  xPos: ["2019", "2020", "2021"],
  series: [
    {
      name: "A",
      values: [1, 7, 5],
    },
    {
      name: "B",
      values: [2, 1, 3],
    },
    {
      name: "C",
      values: [3, 2, 4],
    },
    {
      name: "D",
      values: [4, 5, 2],
    },
    {
      name: "E",
      values: [5, 4, 1],
    },
    {
      name: "F",
      values: [6, 3, 6],
    },
    {
      name: "G",
      values: [7, 6, 7],
    },
  ],
};

const mockData2 = {
  xPos: ["2019", "2020", "2021"],
  series: [
    {
      name: "A",
      values: [3, 2, 4],
    },
    {
      name: "B",
      values: [5, 4, 1],
    },
    {
      name: "C",

      values: [1, 7, 5],
    },
    {
      name: "D",

      values: [7, 6, 7],
    },
    {
      name: "E",

      values: [2, 1, 3],
    },
    {
      name: "F",
      values: [4, 5, 2],
    },
    {
      name: "G",
      values: [6, 3, 6],
    },
  ],
};

export default function RankTrendsLineDemo() {
  const [rankTrendsLine, setRankTrendsLine] = useState<InstanceType<
    typeof RankTrendsLine
  > | null>(null);

  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    setRankTrendsLine(
      new RankTrendsLine({
        dom: "#container",
        data: mockData1,
        opts: {},
      })
    );
  }, []);

  const update = () => {
    if (rankTrendsLine) {
      setTrigger(!trigger);
      rankTrendsLine.update(trigger ? mockData1 : mockData2);
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
