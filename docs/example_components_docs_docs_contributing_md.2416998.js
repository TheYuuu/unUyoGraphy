/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkun_u_yo"] = self["webpackChunkun_u_yo"] || []).push([["example_components_docs_docs_contributing_md"],{

/***/ "./example/components/docs/docs/contributing.md":
/*!******************************************************!*\
  !*** ./example/components/docs/docs/contributing.md ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"## 行为准则\\n每个图表提供一个class，在其构造函数里传参，返回具有操作方法的对象。\\n\\n在思考Functional Programming还是OOP。🤔\\n## 分支管理\\n新组件或者bug、feature新增请pull request到dev分支，dist分支用于打包发布到github page。\\n\\n## Bugs\\n有使用问题请提GitHub Issues https://github.com/TheYuuu/unUyoGraphy/issues  \\n\\n## 命令说明\\n输入图表中文名称，英文名称自动新建配置文件\\n```js\\nnpm run new\\n```\\n\\n运行展示demo\\n```js\\nnpm run dev\\n```\\n\\n打包展示demo\\n```js\\nnpm run dev:build\\n```\\n\\n打包unUyo库\\n```js\\nnpm run dist\\n```\\n\\n## 文件说明\\n```html\\n./unUyoGraphy\\n├─types\\n|   ├─axisHeatMap.d.ts // 图表type文件\\n|   ├─chartBase.d.ts // 基类type文件\\n|   ├─index.d.ts\\n|   └─unUyo.d.ts\\n├─src\\n|  └─index.ts // 抛出引用入口\\n├─packages\\n|    ├─axisHeatMap // 图表对应的开发文件夹\\n|    |      ├─index.ts\\n|    |      └─sample.ts // 可以通过sample.ts提供所需的随机数据函数\\n└─example\\n     ├─charts.json  // 路由定义描述\\n     └─demo\\n        └─axisHeatMap // 图表的demo展示页面\\n               ├─contributing.md // 可以通过contributing.md编写文档\\n               ├─docs.ts // 也可以使用预置的模板docs.ts来导出json描述\\n               └─index.tsx\\n```\");\n\n//# sourceURL=webpack://un-u-yo/./example/components/docs/docs/contributing.md?");

/***/ })

}]);