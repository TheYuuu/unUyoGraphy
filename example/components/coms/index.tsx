import React, { Suspense } from "react";
import asyncComponent from "@/example/lib/asyncComponent";

import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { Layout } from "antd";
const { Sider, Content } = Layout;

import MyMenu from "./menu";

import preview from "../../demo/preview";

export interface Props {
  routerChildren?: routerItem[];
}

export default function coms(props: Props) {
  const { routerChildren } = props;

  return (
    <Layout>
      <Router>
        <Sider>
          <MyMenu list={routerChildren || []} />
        </Sider>
        <Content>
          <section className="main-container main-container-component">
            <Suspense fallback={<p>loading</p>}>
              <Switch>
                <Route path={"/components/preview"} component={preview} />
                {(routerChildren || []).map((r) => (
                  <Route
                    path={r.path}
                    key={r.path}
                    component={asyncComponent(
                      () =>
                        import(
                          /* webpackPrefetch: true */ `../../demo/${r.component}`
                        ),
                      r.children
                    )}
                  ></Route>
                ))}
                <Redirect
                  from="/components"
                  to="/components/preview"
                ></Redirect>
              </Switch>
            </Suspense>
          </section>
        </Content>
      </Router>
    </Layout>
  );
}
