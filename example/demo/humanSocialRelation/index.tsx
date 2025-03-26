import React, { useState, useEffect } from "react";

import DemoModel from "../demoModel";
import docs from "./docs";

// import MarkdownContent from '@lib/markdownContent';
// import contributing from './contributing.md';

import { HumanSocialRelation } from "@/packages/index";

const containerStyle = {
  width: "500px",
  height: "400px",
};

export default function humanSocialRelationDemo() {
  const [humanSocialRelation, sethumanSocialRelation] = useState<InstanceType<
    typeof HumanSocialRelation
  > | null>(null);

  useEffect(() => {
    sethumanSocialRelation(
      new HumanSocialRelation({
        dom: "#container",
        data: {},
        Opts: {},
      })
    );
  }, []);

  return (
    <section>
      <section>
        <div id="container" style={containerStyle}>
          todo
        </div>
      </section>
      <DemoModel docs={docs}></DemoModel>
      {/* <section className="mt-lg">
        <MarkdownContent content={contributing}></MarkdownContent>
      </section> */}
    </section>
  );
}
