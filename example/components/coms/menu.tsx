import * as React from "react";

import { Menu } from 'antd';

import { NavLink, withRouter, RouteComponentProps } from 'react-router-dom'

export interface Props {
  list: routerItem[]
}

class menu extends React.Component<Props & RouteComponentProps<{}, {}>> {
  private path = '';

  constructor(props: Props & RouteComponentProps<{}, {}>) {
    super(props);

    this.path = props.location.pathname ? props.location.pathname : '';
  }

  render() {
    return (
      <Menu theme="light" defaultSelectedKeys={[this.path]} mode="inline" className="asider-menu">
        <Menu.Item key="preview">
          <NavLink to="/components/preview">预览</NavLink>
        </Menu.Item>

        <Menu.ItemGroup title="2D">
          <Menu.Divider className="mb-md"></Menu.Divider>

          {(this.props.list.map((item: any) =>
            <Menu.Item key={item.path}>
              <NavLink to={item.path}>{item.name}</NavLink>
            </Menu.Item>
          ))}
        </Menu.ItemGroup>
      </Menu>
    );
  }
}

export default withRouter(menu) as any;