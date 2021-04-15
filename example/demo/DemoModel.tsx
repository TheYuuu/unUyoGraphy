import React from "react";

import { Table } from 'antd';

export const columns = [
  {
    title: '参数',
    dataIndex: 'params',
    key: 'params'
  },
  {
    title: '说明',
    dataIndex: 'desc',
    key: 'desc'
  },
  {
    title: '类型',
    dataIndex: 'type',
    key: 'type'
  },
  {
    title: '默认值',
    dataIndex: 'default',
    key: 'default'
  }
]

export interface tableType {
  key: string;
  params: string;
  desc: string;
  type: string;
  default: string;
}

export interface DemoModelProps {
  chartsDesc: string[];
  useDesc: string[];
  dataDesc: string[];
  optsData: tableType[];
  methodData: tableType[];
}

export interface propTypes {
  docs: DemoModelProps;
}


export default function AxisHeadMapDemo(prop: propTypes) {
  const { docs } = prop;

  const scrollToAnchor = (anchorName: string) => {
    if (anchorName) {
        let anchorElement = document.getElementById(anchorName);
        if(anchorElement) { anchorElement.scrollIntoView(); }
    }
  }

  return (
    <section className="mt-lg DemoModel">
      <section>
        <h1 id="chartsDesc">
          <span>图表说明</span>
          <a onClick={() => scrollToAnchor('chartsDesc')} className="anchor">#</a>
        </h1>
        {(docs.chartsDesc || []).map((item: string, index: number) => (
          <p key={index}>{item}</p>
        ))}
      </section>
      <section className="mt-lg">
        <h1 id="useDesc">
          <span>推荐场景</span>
          <a onClick={() => scrollToAnchor('useDesc')} className="anchor">#</a>
        </h1>
        {(docs.useDesc || []).map((item: string, index: number) => (
          <p className="left-blue-border" key={index}>{item}</p>
        ))}
      </section>
      <section className="mt-lg">
        <h1 id="dataDesc">
          <span>数据集</span>
          <a onClick={() => scrollToAnchor('dataDesc')} className="anchor">#</a>
        </h1>
        <code>
          {(docs.dataDesc || []).map((item: string, index: number) => (
            <pre key={index}>
              {item}
            </pre>
          ))}
        </code>
      </section>
      <section className="mt-lg">
        <h1 id="optsDesc">
          <span>Opts</span>
          <a onClick={() => scrollToAnchor('optsDesc')} className="anchor">#</a>
        </h1>
        <Table columns={columns} dataSource={docs.optsData} pagination={ false } />
      </section>
      <section className="mt-lg">
        <h1 id="methodDesc">
          <span>Method</span>
          <a onClick={() => scrollToAnchor('methodDesc')} className="anchor">#</a>
        </h1>
        <Table columns={columns} dataSource={docs.methodData} pagination={ false } />
      </section>
    </section>
  );
}