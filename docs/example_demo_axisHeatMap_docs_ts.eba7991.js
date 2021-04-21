/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkun_u_yo"] = self["webpackChunkun_u_yo"] || []).push([["example_demo_axisHeatMap_docs_ts"],{

/***/ "./example/demo/axisHeatMap/docs.ts":
/*!******************************************!*\
  !*** ./example/demo/axisHeatMap/docs.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    chartsDesc: [\n        '对于二维分布场景的数据集来说，可以依靠热力图来观察其度量分布特征，此图例在热力图的表现形式上，增加两轴的统计，可以更加直观地观察到两个维度的分布情况',\n        '建议容器高宽比例4:5',\n        '出处链接: https://flowingdata.com/2019/12/16/grid-map-histogram-ggplot/'\n    ],\n    useDesc: [\n        '任意二维维度的分布数据'\n    ],\n    dataDesc: [\n        `\n    interface axisHeatMapOptionData {\n      data: axisHeatMapData[];\n      seriesX: string[]; // 数据中xPos的集合\n      seriesY: string[]; // 数据中yPos的集合\n    }\n\n    interface axisHeatMapData {\n      value: number;\n      xPos: string | number;\n      yPos: string | number;\n    }\n  `\n    ],\n    optsData: [\n        {\n            key: '1',\n            params: 'mainColor',\n            desc: '图表默认的一致性主色调',\n            type: 'string',\n            default: 'rgb(107, 3, 24)'\n        }\n    ],\n    methodData: [\n        {\n            key: '1',\n            params: 'update',\n            desc: '更新数据',\n            type: `(data: axisHeatMapOptionData) => void`,\n            default: '-'\n        }\n    ]\n});\n\n\n//# sourceURL=webpack://un-u-yo/./example/demo/axisHeatMap/docs.ts?");

/***/ })

}]);