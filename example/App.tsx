import * as React from "react";

import './App.css';

import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

import { menu } from './components/menu';

const Menu = menu;

export class App extends React.Component {
  render() {
    return (
      <Layout>
        <Header>Header</Header>
        <Layout>
          <Sider>
            <Menu />
          </Sider>
          <Content>
            <section className="main-container main-container-component">asdasd</section>
          </Content>
        </Layout>
        <Footer className="algin-center">
            Powered By The Yu
          </Footer>
      </Layout>
    );
  }
}