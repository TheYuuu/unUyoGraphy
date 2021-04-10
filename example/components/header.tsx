import * as React from "react";

import { Menu } from 'antd';

import { NavLink, Link } from 'react-router-dom'

export interface Props {
  list: routerItem[]
}

export class header extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className="my-header">
        <h1>unUyo Graphy</h1>
        <Menu theme="light" defaultSelectedKeys={['components']} mode="horizontal">
          {(this.props.list.map(item =>
            <Menu.Item key={item.path}>
              <NavLink to={item.path}>{item.name}</NavLink>
            </Menu.Item>
          ))}
          <Menu.Item key="goStat">
            <a href="https://github.com/TheYuuu/unUyoGraphy" target="_blank">Star</a>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}