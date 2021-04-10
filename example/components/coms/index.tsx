import * as React from "react";

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

import { AxisHeadMapDemo } from '../../demo/AxisHeadMap';
import { preview } from '../../demo/preview';

import router from '../../router/routers';

console.log(123, router)

export default class coms extends React.Component {
  constructor(props: any) {
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
                <Route path="/components/preview" component={preview} />
                <Route path="/components/AxisHeadMap" component={AxisHeadMapDemo} />
              </Switch>
            </section>
          </Content>
        </Router>
      </Layout>
    );
  }
}