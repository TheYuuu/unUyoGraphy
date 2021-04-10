import * as React from "react";

import { Layout } from 'antd';

const { Sider, Content } = Layout;

export default class docs extends React.Component {
  constructor(props: any) {
    super(props);
  }
  
  render() {
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
}