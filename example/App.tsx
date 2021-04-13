import * as React from "react";
import './App.scss';

import { Layout } from 'antd';
const { Header, Footer } = Layout;

import MyHeader from './components/header';

import router from './router/routers';
import asyncComponent from '../src/lib/asyncComponent';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  useLocation,
  Redirect
} from 'react-router-dom';

function App() {
  return (
    <Layout>
      <Router>
        <Header>
          <MyHeader list={router}></MyHeader>
        </Header>
          <Switch>
            {router.map(r =>
              // <React.Suspense fallback={<p>loading</p>} key={r.path}>
                <Route
                  key={r.path}
                  path={r.path}
                  component={asyncComponent(() => import(`./components/${r.component}`), r.children)}
                  // component={React.lazy(() => import(`./components/${r.component}`))}
                >
                </Route>
              //  </React.Suspense>
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

export default App;