import * as React from "react";
import './App.scss';

import { Layout } from 'antd';
const { Header, Footer } = Layout;

import { header } from './components/header';

import router from './router/routers';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  useLocation,
  Redirect
} from 'react-router-dom';

const MyHeader = header;

export class App extends React.Component {
  render() {
    return (
      <Layout>
        <Router>
          <Header>
            <MyHeader></MyHeader>
          </Header>
            <Switch>
              {router.map(r =>
                <Route path={r.path} key={r.path} component={r.component}></Route>
              )}
              <Redirect from="/" to="/components/preview"></Redirect>
            </Switch>
        </Router>
        <Footer className="algin-center">
            Powered By The Yu
        </Footer>
      </Layout>
    );
  }
}