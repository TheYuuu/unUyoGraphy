import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import { Layout } from 'antd';
const { Sider, Content } = Layout;

import MyMenu from './menu';

import MarkdownContent from '@lib/markdownContent';
import introduce from './docs/introduce.md';
import gettingStarted from './docs/gettingStarted.md';
import contributing from './docs/contributing.md';

export interface Props {
  routerChildren?: routerItem[]
}

export default function docs (props: Props) {
  const { routerChildren } = props;

  return (
    <Layout>
      <Sider>
        <MyMenu list={routerChildren || []} />
      </Sider>
      <Content>
        <section className="main-container main-container-component">
        <Switch>
          <Route path={'/docs/introduce'} >
            <MarkdownContent content={introduce} />
          </Route>

          <Route path={'/docs/getting-started'} >
            <MarkdownContent content={gettingStarted} />
          </Route>

          <Route path={'/docs/contributing'} >
            <MarkdownContent content={contributing} />
          </Route>

          <Redirect from="/docs" to="/docs/introduce"></Redirect>
        </Switch>
        </section>
      </Content>
    </Layout>
  );
}