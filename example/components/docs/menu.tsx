import React, { useState, useEffect } from "react";

import { Menu } from 'antd';

import { NavLink, useLocation } from 'react-router-dom'

export interface Props {
  list: routerItem[]
}

export default function MyMenu(props: Props) {
  const { list } = props;
  const [path, setPath] = useState('');

  const pathname = useLocation().pathname;

  useEffect(() => {
    setPath(pathname);
  }, [pathname])

  return (
    <Menu theme="light" selectedKeys={[path]} mode="inline" className="asider-menu">
      {(list.map(item =>
        <Menu.Item key={item.path}>
          <NavLink to={item.path}>{item.name}</NavLink>
        </Menu.Item>
      ))}
    </Menu>
  );
}
