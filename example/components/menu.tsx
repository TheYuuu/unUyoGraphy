import * as React from "react";

import { Layout, Menu, Breadcrumb } from 'antd';

const { SubMenu } = Menu;

export class menu extends React.Component {
  render() {
    return (
      <Menu theme="light" defaultSelectedKeys={['1']} mode="inline" className="asider-menu">
        <Menu.Item key="preview">预览</Menu.Item>

        <Menu.ItemGroup title="2D">
          <Menu.Divider className="mb-md"></Menu.Divider>
          <Menu.Item key="1">
            两轴热力统计
          </Menu.Item>
          <Menu.Item key="todo">
            todo
          </Menu.Item>
        </Menu.ItemGroup>
      </Menu>
    );
  }
}