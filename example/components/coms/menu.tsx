import * as React from "react";

import { Menu } from 'antd';

import { NavLink } from 'react-router-dom'

export interface Props {
  list: routerItem[]
}

export class menu extends React.Component<Props> {
  constructor(props: Props) {
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

          {(this.props.list.map(item =>
            <Menu.Item key={item.path}>
              <NavLink to={item.path}>{item.name}</NavLink>
            </Menu.Item>
          ))}
        </Menu.ItemGroup>
      </Menu>
    );
  }
}