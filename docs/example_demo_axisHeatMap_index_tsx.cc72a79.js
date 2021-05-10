/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkun_u_yo"] = self["webpackChunkun_u_yo"] || []).push([["example_demo_axisHeatMap_index_tsx"],{

/***/ "./example/demo/axisHeatMap/docs.ts":
/*!******************************************!*\
  !*** ./example/demo/axisHeatMap/docs.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    chartsDesc: [\n        '对于二维分布场景的数据集来说，可以依靠热力图来观察其度量分布特征，此图例在热力图的表现形式上，增加两轴的统计，可以更加直观地观察到两个维度的分布情况',\n        '建议容器高宽比例4:5',\n        '出处链接: https://flowingdata.com/2019/12/16/grid-map-histogram-ggplot/'\n    ],\n    useDesc: [\n        '任意二维维度的分布数据'\n    ],\n    dataDesc: [\n        `\n    interface axisHeatMapOptionData {\n      data: axisHeatMapData[];\n      seriesX: string[]; // 数据中xPos的集合\n      seriesY: string[]; // 数据中yPos的集合\n    }\n\n    interface axisHeatMapData {\n      value: number;\n      xPos: string | number;\n      yPos: string | number;\n    }\n  `\n    ],\n    optsData: [\n        {\n            key: '1',\n            params: 'mainColor',\n            desc: '图表默认的一致性主色调',\n            type: 'string',\n            default: 'rgb(107, 3, 24)'\n        }\n    ],\n    methodData: [\n        {\n            key: '1',\n            params: 'update',\n            desc: '更新数据',\n            type: `(data: axisHeatMapOptionData) => void`,\n            default: '-'\n        }\n    ]\n});\n\n\n//# sourceURL=webpack://un-u-yo/./example/demo/axisHeatMap/docs.ts?");

/***/ }),

/***/ "./example/demo/axisHeatMap/index.tsx":
/*!********************************************!*\
  !*** ./example/demo/axisHeatMap/index.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AxisHeatMapDemo)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _src_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/src/index */ \"./src/index.ts\");\n/* harmony import */ var _packages_axisHeatMap_sample__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/packages/axisHeatMap/sample */ \"./packages/axisHeatMap/sample.ts\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/button/index.js\");\n/* harmony import */ var _demoModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../demoModel */ \"./example/demo/demoModel.tsx\");\n/* harmony import */ var _docs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./docs */ \"./example/demo/axisHeatMap/docs.ts\");\n\n\n\n\n\n\n// import MarkdownContent from '@lib/markdownContent';\n// import contributing from './contributing.md';\nconst { AxisHeatMap } = _src_index__WEBPACK_IMPORTED_MODULE_1__.default;\nconst containerStyle = {\n    width: '350px',\n    height: '350px'\n};\nfunction AxisHeatMapDemo() {\n    const [axisHeatMap, setAxisHeatMap] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n        setAxisHeatMap(new AxisHeatMap({\n            dom: '#container',\n            mode: 'svg',\n            data: {\n                data: (0,_packages_axisHeatMap_sample__WEBPACK_IMPORTED_MODULE_2__.default)().data,\n                seriesX: (0,_packages_axisHeatMap_sample__WEBPACK_IMPORTED_MODULE_2__.default)().xPos,\n                seriesY: (0,_packages_axisHeatMap_sample__WEBPACK_IMPORTED_MODULE_2__.default)().yPos\n            }\n        }));\n    }, []);\n    const update = () => {\n        if (axisHeatMap) {\n            axisHeatMap.update({\n                data: (0,_packages_axisHeatMap_sample__WEBPACK_IMPORTED_MODULE_2__.default)().data,\n                seriesX: (0,_packages_axisHeatMap_sample__WEBPACK_IMPORTED_MODULE_2__.default)().xPos,\n                seriesY: (0,_packages_axisHeatMap_sample__WEBPACK_IMPORTED_MODULE_2__.default)().yPos\n            });\n        }\n    };\n    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"section\", null,\n        react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"section\", null,\n            react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { id: \"container\", style: containerStyle }),\n            react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_5__.default, { onClick: () => update(), type: \"primary\" }, \"update\")),\n        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_demoModel__WEBPACK_IMPORTED_MODULE_3__.default, { docs: _docs__WEBPACK_IMPORTED_MODULE_4__.default })));\n}\n\n\n//# sourceURL=webpack://un-u-yo/./example/demo/axisHeatMap/index.tsx?");

/***/ }),

/***/ "./packages/axisHeatMap/sample.ts":
/*!****************************************!*\
  !*** ./packages/axisHeatMap/sample.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"xPos\": () => (/* binding */ xPos),\n/* harmony export */   \"yPos\": () => (/* binding */ yPos),\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst xPos = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',\n    'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];\nconst yPos = ['A1', 'B1', 'C1', 'D1', 'E1', 'F1', 'G1',\n    'H1', 'I1', 'J1', 'K1', 'L1', 'M1', 'N1', 'O1', 'P1', 'Q1', 'R1',\n    'S1', 'T1', 'U1', 'V1', 'W1', 'X1', 'Y1', 'Z1'];\nconst getData = () => {\n    return new Array(250).fill(0).map(() => {\n        return {\n            value: Number((Math.random() * 100).toFixed(0)),\n            xPos: xPos[Number((Math.random() * (xPos.length - 1)).toFixed(0))],\n            yPos: yPos[Number((Math.random() * (yPos.length - 1)).toFixed(0))]\n        };\n    });\n};\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n    return {\n        data: getData(),\n        xPos,\n        yPos\n    };\n}\n;\n\n\n//# sourceURL=webpack://un-u-yo/./packages/axisHeatMap/sample.ts?");

/***/ })

}]);