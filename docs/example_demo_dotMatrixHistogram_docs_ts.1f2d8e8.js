/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkun_u_yo"] = self["webpackChunkun_u_yo"] || []).push([["example_demo_dotMatrixHistogram_docs_ts"],{

/***/ "./example/demo/dotMatrixHistogram/docs.ts":
/*!*************************************************!*\
  !*** ./example/demo/dotMatrixHistogram/docs.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    chartsDesc: [\n        '直方图用于表示数据变化情况以及规则性，能够通过其比较直观地看出数据特性的分布状态，此图例在直方图的每个间围内，用点阵的形式，通过颜色标识不同数据的一个维度。',\n        '出处链接：https://www.washingtonpost.com/investigations/interactive/2021/domestic-terrorism-data/'\n    ],\n    useDesc: [\n        '当直方图每个数据来源都存在的时候，可以对每个数据进行直方统计并通过颜色标记数据的一个维度。'\n    ],\n    dataDesc: [\n        `\n    export interface dotMatrixHistogramOptionData {\n      data: dotMatrixHistogramData[];\n      seriesX: string[];\n      seriesTypes: string[];\n    }\n\n    export interface dotMatrixHistogramData {\n      seriesX: string;\n      data: dotMatrixHistogramDotData[]\n    }\n\n    export interface dotMatrixHistogramDotData {\n      seriesType: string;\n    }\n  `\n    ],\n    optsData: [\n        {\n            key: '1',\n            params: 'bars',\n            desc: '每个间围一行存在多少个点',\n            type: 'number',\n            default: '3'\n        },\n        {\n            key: '2',\n            params: 'barPadding',\n            desc: '间围的间距',\n            type: 'number',\n            default: '5'\n        },\n        {\n            key: '3',\n            params: 'colors',\n            desc: 'seriesTypes 按顺序对应的颜色',\n            type: 'string[]',\n            default: `['#96BBDA', '#FFC194', '#9ED19A', '#EF9997', '#CAB3DF', '#C6ABA6'] `\n        }\n    ],\n    methodData: [\n        {\n            key: '1',\n            params: 'update',\n            desc: '更新数据',\n            type: `(data: dotMatrixHistogramOptionData) => void`,\n            default: '-'\n        }\n    ]\n});\n\n\n//# sourceURL=webpack://un-u-yo/./example/demo/dotMatrixHistogram/docs.ts?");

/***/ })

}]);