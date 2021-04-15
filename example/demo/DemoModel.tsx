import React, { useState, useEffect } from "react";

import { Table } from 'antd';

export default function AxisHeadMapDemo() {

  const scrollToAnchor = (anchorName: string) => {
    if (anchorName) {
        let anchorElement = document.getElementById(anchorName);
        if(anchorElement) { anchorElement.scrollIntoView(); }
    }
  }

  const s = `
    interface AxisHeadMapData {
      value: number;
      xPos: string | number;
      yPos: string | number;
    }
  `;

  const columns = [
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

  const data = [
    {
      key: '1',
      params: 'mainColor',
      desc: '图表默认的一致性主色调',
      type: 'string',
      default: 'rgb(107 3 24)'
    },
  ]

  return (
    <section className="mt-lg DemoModel">
      <section>
        <h1 id="chartsDesc">
          <span>图表说明</span>
          <a onClick={() => scrollToAnchor('chartsDesc')} className="anchor">#</a>
        </h1>
        <p>
          对于二维分布场景的数据集来说，可以依靠热力图来观察其度量分布特征，此图例在热力图的表现形式上，增加两轴的统计，可以更加直观地观察到两个维度的分布情况
        </p>
      </section>
      <section className="mt-lg">
        <h1 id="useDesc">
          <span>推荐场景</span>
          <a onClick={() => scrollToAnchor('useDesc')} className="anchor">#</a>
        </h1>
        <p className="left-blue-border">
          经纬度下的人口分布情况
        </p>
      </section>
      <section className="mt-lg">
        <h1 id="dataDesc">
          <span>数据集</span>
          <a onClick={() => scrollToAnchor('dataDesc')} className="anchor">#</a>
        </h1>
        <code>
          <pre>
            {s}
          </pre>
        </code>
      </section>
      <section className="mt-lg">
        <h1 id="optsDesc">
          <span>配置项</span>
          <a onClick={() => scrollToAnchor('optsDesc')} className="anchor">#</a>
        </h1>
        <Table columns={columns} dataSource={data} pagination={ false } />
      </section>
    </section>
  );
}