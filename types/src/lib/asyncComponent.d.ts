/// <reference types="react" />
export default function asyncComponent(importComponent: () => Promise<EsModuleComponent>, props?: any): () => JSX.Element;
