import * as React from "react";
import asyncComponent from '../../../src/lib/asyncComponent';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  useLocation,
  Redirect
} from 'react-router-dom';

import { Layout } from 'antd';
const { Sider, Content } = Layout;

import { menu } from './menu';
const Menu = menu;

import preview from '../../demo/preview';

export interface Props {
  routerChildren?: routerItem[]
}

export default class coms extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  
  render() {
    return (
      <Layout>
        <Router>
          <Sider>
            <Menu />
          </Sider>
          <Content>
            <section className="main-container main-container-component">
              <Switch>
                <Route path={'/components/preview'}
                  component={preview}
                />

                {(this.props.routerChildren || []).map(r =>
                  <Route path={r.path} key={r.path}
                    component={asyncComponent(() => import(`../../demo/${r.component}`), r.children)}
                  >
                  </Route>
                )}
              </Switch>
            </section>
          </Content>
        </Router>
      </Layout>
    );
  }
}