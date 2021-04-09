import * as React from "react";
import './App.scss';

import { Layout } from 'antd';
const { Header, Footer } = Layout;

import { header } from './components/header';
import { coms } from './components/coms/coms';
import { docs } from './components/docs/docs';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  useLocation,
  Redirect
} from 'react-router-dom';

const MyHeader = header;
const Coms = coms;
const Docs = docs;

export class App extends React.Component {
  render() {
    return (
      <Layout>
        <Router>
          <Header>
            <MyHeader></MyHeader>
          </Header>
            <Switch>
              <Route path="/components" component={Coms} />
              <Route path="/docs" component={Docs} />
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