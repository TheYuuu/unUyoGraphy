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
      name: "Tail Css",
      values: [1, 7, 5],
    },
    {
      name: "Bulma",
      values: [2, 1, 3],
    },
    {
      name: "PureCss",
      values: [3, 2, 4],
    },
    {
      name: "PureCss",
      values: [4, 5, 2],
    },
    {
      name: "PureCss",
      values: [5, 4, 1],
    },
    {
      name: "PureCss",
      values: [6, 3, 6],
    },
    {
      name: "PureCss",
      values: [7, 6, 7],
    },
  ],
};

const mockData2 = {
  xPos: ["2019", "2020", "2021"],
  series: [
    {
      name: "Tail Css",
      values: [3, 2, 4],
    },
    {
      name: "Bulma",
      values: [5, 4, 1],
    },
    {
      name: "PureCss",

      values: [1, 7, 5],
    },
    {
      name: "PureCss",

      values: [7, 6, 7],
    },
    {
      name: "PureCss",

      values: [2, 1, 3],
    },
    {
      name: "PureCss",
      values: [4, 5, 2],
    },
    {
      name: "PureCss",
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
