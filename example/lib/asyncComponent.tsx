import React, { lazy } from "react";
export default function asyncComponent(
  importComponent: () => Promise<EsModuleComponent>,
  props?: any
) {
  return function () {
    const C = lazy(importComponent);
    return <C {...props} />;
  };
}
