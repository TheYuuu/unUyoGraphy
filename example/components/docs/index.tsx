import React from "react";

import { Layout } from 'antd';

const { Sider, Content } = Layout;

export default function docs () {
  return (
    <Layout>
      <Sider>
      docs
      </Sider>
      <Content>
        <section className="main-container main-container-component">docs</section>
      </Content>
    </Layout>
  );
}