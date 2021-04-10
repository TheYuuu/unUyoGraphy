import React, { Component } from "react";
export default function asyncComponent(importComponent: () => Promise<EsModuleComponent>, children?: any[]) {
	class AsyncComponent extends Component {
    state = {
      component: null
    }

		constructor(props: any) {
			super(props);
		}

		async componentDidMount() {
			const component = await importComponent();

			this.setState({
				component: component.default
			});
		}

		render() {
			const C: any = this.state.component;
			return C ? <C routerChildren={children} /> : null;
		}
	}

	return AsyncComponent;
}