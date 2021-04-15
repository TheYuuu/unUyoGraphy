/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkun_u_yo"] = self["webpackChunkun_u_yo"] || []).push([["example_demo_DemoModel_tsx"],{

/***/ "./example/demo/DemoModel.tsx":
/*!************************************!*\
  !*** ./example/demo/DemoModel.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AxisHeadMapDemo)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/table/index.js\");\n\n\nfunction AxisHeadMapDemo() {\n    var scrollToAnchor = function (anchorName) {\n        if (anchorName) {\n            var anchorElement = document.getElementById(anchorName);\n            if (anchorElement) {\n                anchorElement.scrollIntoView();\n            }\n        }\n    };\n    var s = \"\\n    interface AxisHeadMapData {\\n      value: number;\\n      xPos: string | number;\\n      yPos: string | number;\\n    }\\n  \";\n    var columns = [\n        {\n            title: '参数',\n            dataIndex: 'params',\n            key: 'params'\n        },\n        {\n            title: '说明',\n            dataIndex: 'desc',\n            key: 'desc'\n        },\n        {\n            title: '类型',\n            dataIndex: 'type',\n            key: 'type'\n        },\n        {\n            title: '默认值',\n            dataIndex: 'default',\n            key: 'default'\n        }\n    ];\n    var data = [\n        {\n            key: '1',\n            params: 'mainColor',\n            desc: '图表默认的一致性主色调',\n            type: 'string',\n            default: 'rgb(107 3 24)'\n        },\n    ];\n    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"section\", { className: \"mt-lg DemoModel\" },\n        react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"section\", null,\n            react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h1\", { id: \"chartsDesc\" },\n                react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", null, \"\\u56FE\\u8868\\u8BF4\\u660E\"),\n                react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"a\", { onClick: function () { return scrollToAnchor('chartsDesc'); }, className: \"anchor\" }, \"#\")),\n            react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, \"\\u5BF9\\u4E8E\\u4E8C\\u7EF4\\u5206\\u5E03\\u573A\\u666F\\u7684\\u6570\\u636E\\u96C6\\u6765\\u8BF4\\uFF0C\\u53EF\\u4EE5\\u4F9D\\u9760\\u70ED\\u529B\\u56FE\\u6765\\u89C2\\u5BDF\\u5176\\u5EA6\\u91CF\\u5206\\u5E03\\u7279\\u5F81\\uFF0C\\u6B64\\u56FE\\u4F8B\\u5728\\u70ED\\u529B\\u56FE\\u7684\\u8868\\u73B0\\u5F62\\u5F0F\\u4E0A\\uFF0C\\u589E\\u52A0\\u4E24\\u8F74\\u7684\\u7EDF\\u8BA1\\uFF0C\\u53EF\\u4EE5\\u66F4\\u52A0\\u76F4\\u89C2\\u5730\\u89C2\\u5BDF\\u5230\\u4E24\\u4E2A\\u7EF4\\u5EA6\\u7684\\u5206\\u5E03\\u60C5\\u51B5\")),\n        react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"section\", { className: \"mt-lg\" },\n            react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h1\", { id: \"useDesc\" },\n                react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", null, \"\\u63A8\\u8350\\u573A\\u666F\"),\n                react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"a\", { onClick: function () { return scrollToAnchor('useDesc'); }, className: \"anchor\" }, \"#\")),\n            react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", { className: \"left-blue-border\" }, \"\\u7ECF\\u7EAC\\u5EA6\\u4E0B\\u7684\\u4EBA\\u53E3\\u5206\\u5E03\\u60C5\\u51B5\")),\n        react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"section\", { className: \"mt-lg\" },\n            react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h1\", { id: \"dataDesc\" },\n                react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", null, \"\\u6570\\u636E\\u96C6\"),\n                react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"a\", { onClick: function () { return scrollToAnchor('dataDesc'); }, className: \"anchor\" }, \"#\")),\n            react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"code\", null,\n                react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"pre\", null, s))),\n        react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"section\", { className: \"mt-lg\" },\n            react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h1\", { id: \"optsDesc\" },\n                react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", null, \"\\u914D\\u7F6E\\u9879\"),\n                react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"a\", { onClick: function () { return scrollToAnchor('optsDesc'); }, className: \"anchor\" }, \"#\")),\n            react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_1__.default, { columns: columns, dataSource: data, pagination: false }))));\n}\n\n\n//# sourceURL=webpack://un-u-yo/./example/demo/DemoModel.tsx?");

/***/ })

}]);