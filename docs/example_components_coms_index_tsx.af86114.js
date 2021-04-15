/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkun_u_yo"] = self["webpackChunkun_u_yo"] || []).push([["example_components_coms_index_tsx"],{

/***/ "./example/demo lazy recursive ^\\.\\/.*$":
/*!***********************************************************************!*\
  !*** ./example/demo/ lazy ^\.\/.*$ prefetchOrder: 0 namespace object ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./AxisHeadMap\": [\n\t\t\"./example/demo/AxisHeadMap.tsx\",\n\t\t\"vendors-node_modules_antd_es_table_index_js\",\n\t\t\"vendors-node_modules_d3_index_js\",\n\t\t\"example_demo_AxisHeadMap_tsx\"\n\t],\n\t\"./AxisHeadMap.tsx\": [\n\t\t\"./example/demo/AxisHeadMap.tsx\",\n\t\t\"vendors-node_modules_antd_es_table_index_js\",\n\t\t\"vendors-node_modules_d3_index_js\",\n\t\t\"example_demo_AxisHeadMap_tsx\"\n\t],\n\t\"./DemoModel\": [\n\t\t\"./example/demo/DemoModel.tsx\",\n\t\t\"vendors-node_modules_antd_es_table_index_js\",\n\t\t\"example_demo_DemoModel_tsx\"\n\t],\n\t\"./DemoModel.tsx\": [\n\t\t\"./example/demo/DemoModel.tsx\",\n\t\t\"vendors-node_modules_antd_es_table_index_js\",\n\t\t\"example_demo_DemoModel_tsx\"\n\t],\n\t\"./preview\": [\n\t\t\"./example/demo/preview.tsx\"\n\t],\n\t\"./preview.tsx\": [\n\t\t\"./example/demo/preview.tsx\"\n\t]\n};\nfunction webpackAsyncContext(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\treturn Promise.resolve().then(() => {\n\t\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\t\te.code = 'MODULE_NOT_FOUND';\n\t\t\tthrow e;\n\t\t});\n\t}\n\n\tvar ids = map[req], id = ids[0];\n\treturn Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {\n\t\treturn __webpack_require__(id);\n\t});\n}\nwebpackAsyncContext.keys = () => (Object.keys(map));\nwebpackAsyncContext.id = \"./example/demo lazy recursive ^\\\\.\\\\/.*$\";\nmodule.exports = webpackAsyncContext;\n\n//# sourceURL=webpack://un-u-yo/./example/demo/_lazy_^\\.\\/.*$_prefetchOrder:_0_namespace_object?");

/***/ }),

/***/ "./example/components/coms/index.tsx":
/*!*******************************************!*\
  !*** ./example/components/coms/index.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ coms)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _src_lib_asyncComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/lib/asyncComponent */ \"./src/lib/asyncComponent.tsx\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/esm/react-router.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/layout/index.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ \"./example/components/coms/menu.tsx\");\n/* harmony import */ var _demo_preview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../demo/preview */ \"./example/demo/preview.tsx\");\n\n\n\n\nvar Sider = antd__WEBPACK_IMPORTED_MODULE_2__.default.Sider, Content = antd__WEBPACK_IMPORTED_MODULE_2__.default.Content;\n\nvar Menu = _menu__WEBPACK_IMPORTED_MODULE_3__.default;\n\nfunction coms(props) {\n    var routerChildren = props.routerChildren;\n    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_2__.default, null,\n        react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.HashRouter, null,\n            react__WEBPACK_IMPORTED_MODULE_0__.createElement(Sider, null,\n                react__WEBPACK_IMPORTED_MODULE_0__.createElement(Menu, { list: routerChildren || [] })),\n            react__WEBPACK_IMPORTED_MODULE_0__.createElement(Content, null,\n                react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"section\", { className: \"main-container main-container-component\" },\n                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, { fallback: react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, \"loading\") },\n                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Switch, null,\n                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, { path: '/components/preview', component: _demo_preview__WEBPACK_IMPORTED_MODULE_4__.default }),\n                            (routerChildren || []).map(function (r) {\n                                return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, { path: r.path, key: r.path, component: (0,_src_lib_asyncComponent__WEBPACK_IMPORTED_MODULE_1__.default)(function () { return __webpack_require__(\"./example/demo lazy recursive ^\\\\.\\\\/.*$\")(\"./\" + r.component); }, r.children) });\n                            }),\n                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Redirect, { from: \"/components\", to: \"/components/preview\" }))))))));\n}\n\n\n//# sourceURL=webpack://un-u-yo/./example/components/coms/index.tsx?");

/***/ }),

/***/ "./example/components/coms/menu.tsx":
/*!******************************************!*\
  !*** ./example/components/coms/menu.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menu)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/menu/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/esm/react-router.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n\n\n\nfunction menu(props) {\n    var list = props.list;\n    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''), path = _a[0], setPath = _a[1];\n    var pathname = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useLocation)().pathname;\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n        setPath(pathname);\n    }, [pathname]);\n    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_2__.default, { theme: \"light\", selectedKeys: [path], mode: \"inline\", className: \"asider-menu\" },\n        react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_2__.default.Item, { key: \"/components/preview\" },\n            react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.NavLink, { to: \"/components/preview\" }, \"\\u9884\\u89C8\")),\n        react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_2__.default.ItemGroup, { title: \"2D\" },\n            react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_2__.default.Divider, { className: \"mb-md\" }),\n            (list.map(function (item) {\n                return react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_2__.default.Item, { key: item.path },\n                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.NavLink, { to: item.path }, item.name));\n            })))));\n}\n\n\n//# sourceURL=webpack://un-u-yo/./example/components/coms/menu.tsx?");

/***/ }),

/***/ "./example/demo/preview.tsx":
/*!**********************************!*\
  !*** ./example/demo/preview.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ preview)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nfunction preview() {\n    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, \"preview\"));\n}\n\n\n//# sourceURL=webpack://un-u-yo/./example/demo/preview.tsx?");

/***/ })

}]);