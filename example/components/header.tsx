import * as React from "react";

import { Menu } from 'antd';

import { NavLink, withRouter } from 'react-router-dom'
export interface Props {
  list: routerItem[]
}
class MyHeader extends React.Component<any> {
  private path = '';

  constructor(props: any) {
    super(props);

    const paths = props.location.pathname.split('/');
    if (paths[1]) {
      this.path = '/' + paths[1];
    }
  }

  render() {
    return (
      <div className="my-header">
        <h1>unUyo Graphy</h1>
        <Menu theme="light" defaultSelectedKeys={[this.path]} mode="horizontal">
          {(this.props.list.map((item: any) =>
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

export default withRouter(MyHeader);