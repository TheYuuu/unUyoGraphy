/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkun_u_yo"] = self["webpackChunkun_u_yo"] || []).push([["example_components_coms_menu_tsx"],{

/***/ "./example/components/coms/menu.tsx":
/*!******************************************!*\
  !*** ./example/components/coms/menu.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyMenu)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/menu/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/esm/react-router.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n\n\n\nfunction MyMenu(props) {\n    const { list } = props;\n    const [path, setPath] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');\n    const pathname = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useLocation)().pathname;\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n        setPath(pathname);\n    }, [pathname]);\n    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_2__.default, { theme: \"light\", selectedKeys: [path], mode: \"inline\", className: \"asider-menu\" },\n        react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_2__.default.Item, { key: \"/components/preview\" },\n            react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.NavLink, { to: \"/components/preview\" }, \"\\u603B\\u89C8\")),\n        react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_2__.default.ItemGroup, { title: \"2D\" },\n            react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_2__.default.Divider, { className: \"mb-md\" }),\n            (list.map(item => react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_2__.default.Item, { key: item.path },\n                react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.NavLink, { to: item.path }, item.name)))))));\n}\n\n\n//# sourceURL=webpack://un-u-yo/./example/components/coms/menu.tsx?");

/***/ })

}]);