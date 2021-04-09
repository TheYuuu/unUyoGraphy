import * as React from "react";

import { Menu } from 'antd';

import { NavLink } from 'react-router-dom'

export class menu extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <Menu theme="light" defaultSelectedKeys={['preview']} mode="inline" className="asider-menu">
        <Menu.Item key="preview">
          <NavLink to="/components/preview">预览</NavLink>
        </Menu.Item>

        <Menu.ItemGroup title="2D">
          <Menu.Divider className="mb-md"></Menu.Divider>

          <Menu.Item key="AxisHeadMap">
            <NavLink to="/components/AxisHeadMap">两轴热力统计</NavLink>
          </Menu.Item>

          <Menu.Item key="todo">
            <NavLink to="/components/todo">
              todo
            </NavLink>
          </Menu.Item>
        </Menu.ItemGroup>
      </Menu>
    );
  }
}