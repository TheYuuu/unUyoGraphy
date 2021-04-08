import * as React from "react";

import { Layout, Menu, Breadcrumb } from 'antd';

const { SubMenu } = Menu;

export class header extends React.Component {
  render() {
    return (
      <div className="my-header">
        <h1>UnUyo Graphy</h1>
        <Menu theme="light" defaultSelectedKeys={['1']} mode="horizontal">
          <Menu.Item key="1">文档</Menu.Item>
          <Menu.Item key="2">组件</Menu.Item>
          <Menu.Item key="3">Star</Menu.Item>
        </Menu>
      </div>
    );
  }
}