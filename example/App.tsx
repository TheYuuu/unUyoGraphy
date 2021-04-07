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
        <Sider>
          <Menu />
        </Sider>
        <Layout>
          <Header>Header</Header>
          <Content>Content</Content>
          <Footer>
            Powered By The Yu
          </Footer>
        </Layout>
      </Layout>
    );
  }
}