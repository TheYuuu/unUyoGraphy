import * as React from "react";

import { Layout, Menu, Breadcrumb } from 'antd';

const { SubMenu } = Menu;

export class menu extends React.Component {
  render() {
    return (
      <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="1">
          Option 1
        </Menu.Item>
        <Menu.Item key="2">
          Option 2
        </Menu.Item>
      </Menu>
    );
  }
}