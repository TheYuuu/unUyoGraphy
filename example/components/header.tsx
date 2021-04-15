import React, { useState, useEffect } from "react";

import { Menu } from 'antd';

import { NavLink, useLocation } from 'react-router-dom';

export interface Props {
  list: routerItem[]
}

export default function MyHeader(props: Props) {
  const { list } = props;
  const [path, setPath] = useState('');

  const pathname = useLocation().pathname;

  useEffect(() => {
    const paths = pathname.split('/');
    if (paths[1]) {
      setPath('/' + paths[1]);
    }
  }, [pathname])

  return (
    <div className="my-header">
      <h1>
        <img src={require('../favicon.png')} alt="" height="50px"/>
        unUyo Graphy
      </h1>
      <Menu theme="light" selectedKeys={[path]} mode="horizontal">
        {(list.map(item =>
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
