import * as React from "react";

import charts from '../src/index';

console.log(charts);

export interface HelloProps { compiler: string; framework: string; }
export class App extends React.Component<HelloProps, {}> {
    render() {
        return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
    }
}