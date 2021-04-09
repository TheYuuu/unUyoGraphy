import * as React from "react";

import { Menu } from 'antd';

import { NavLink } from 'react-router-dom'

export class header extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="my-header">
        <h1>UnUyo Graphy</h1>
        <Menu theme="light" defaultSelectedKeys={['components']} mode="horizontal">
          <Menu.Item key="components">
            <NavLink to="/components/preview">组件</NavLink>
          </Menu.Item>
          <Menu.Item key="docs">
            <NavLink to="/docs">文档</NavLink>
          </Menu.Item>
          <Menu.Item key="3">Star</Menu.Item>
        </Menu>
      </div>
    );
  }
}