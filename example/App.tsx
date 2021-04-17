import React, { Suspense } from "react";
import './style/App.scss';

import { Layout } from 'antd';
const { Header, Footer } = Layout;

import MyHeader from './components/header';

import router from './router/routers';
import asyncComponent from '../src/lib/asyncComponent';

// import unUyo from 'un-u-yo';
// console.log(unUyo)

import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

function App() {
  return (
    <Layout>
      <Router>
        <Header>
          <MyHeader list={router}></MyHeader>
        </Header>
        <Suspense fallback={<p>loading</p>}>
          <Switch>
            {router.map(r =>
                <Route
                  key={r.path}
                  path={r.path}
                  component={asyncComponent(
                    () => import(/* webpackPrefetch: true */ `./components/${r.component}`),
                    {routerChildren: r.children}
                  )}
                >
                </Route>
              )}
              <Redirect from="/" to="/components/preview"></Redirect>
            </Switch>
          </Suspense>
      </Router>
      <Footer className="algin-center">
          Supported By <a target="_blank" href="https://www.yuque.com/u1201814/agoukq">The_Yu</a>
      </Footer>
    </Layout>
  );
}

export default App;