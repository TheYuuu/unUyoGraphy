/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkun_u_yo"] = self["webpackChunkun_u_yo"] || []).push([["example_demo_dotMatrixHistogram_index_tsx"],{

/***/ "./example/demo/dotMatrixHistogram/docs.ts":
/*!*************************************************!*\
  !*** ./example/demo/dotMatrixHistogram/docs.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    chartsDesc: [\n        '直方图用于表示数据变化情况以及规则性，能够通过其比较直观地看出数据特性的分布状态，此图例在直方图的每个间围内，用点阵的形式，通过颜色标识不同数据的一个维度。',\n        '出处链接：https://www.washingtonpost.com/investigations/interactive/2021/domestic-terrorism-data/'\n    ],\n    useDesc: [\n        '当直方图每个数据来源都存在的时候，可以对每个数据进行直方统计并通过颜色标记数据的一个维度。'\n    ],\n    dataDesc: [\n        `\n    export interface dotMatrixHistogramOptionData {\n      data: dotMatrixHistogramData[];\n      seriesX: string[];\n      seriesTypes: string[];\n    }\n\n    export interface dotMatrixHistogramData {\n      seriesX: string;\n      data: dotMatrixHistogramDotData[]\n    }\n\n    export interface dotMatrixHistogramDotData {\n      seriesType: string;\n    }\n  `\n    ],\n    optsData: [\n        {\n            key: '1',\n            params: 'bars',\n            desc: '每个间围一行存在多少个点',\n            type: 'number',\n            default: '3'\n        },\n        {\n            key: '2',\n            params: 'barPadding',\n            desc: '间围的间距',\n            type: 'number',\n            default: '5'\n        },\n        {\n            key: '3',\n            params: 'colors',\n            desc: 'seriesTypes 按顺序对应的颜色',\n            type: 'string[]',\n            default: `['#96BBDA', '#FFC194', '#9ED19A', '#EF9997', '#CAB3DF', '#C6ABA6'] `\n        }\n    ],\n    methodData: [\n        {\n            key: '1',\n            params: 'update',\n            desc: '更新数据',\n            type: `(data: dotMatrixHistogramOptionData) => void`,\n            default: '-'\n        }\n    ]\n});\n\n\n//# sourceURL=webpack://un-u-yo/./example/demo/dotMatrixHistogram/docs.ts?");

/***/ }),

/***/ "./example/demo/dotMatrixHistogram/index.tsx":
/*!***************************************************!*\
  !*** ./example/demo/dotMatrixHistogram/index.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DotMatrixHistogramDemo)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/button/index.js\");\n/* harmony import */ var _src_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/src/index */ \"./src/index.ts\");\n/* harmony import */ var _packages_dotMatrixHistogram_sample__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/packages/dotMatrixHistogram/sample */ \"./packages/dotMatrixHistogram/sample.ts\");\n/* harmony import */ var _demoModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../demoModel */ \"./example/demo/demoModel.tsx\");\n/* harmony import */ var _docs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./docs */ \"./example/demo/dotMatrixHistogram/docs.ts\");\n\n\n\n\n\n\n// import MarkdownContent from '@lib/markdownContent';\n// import contributing from './contributing.md';\nconst { DotMatrixHistogram } = _src_index__WEBPACK_IMPORTED_MODULE_1__.default;\nconst containerStyle = {\n    width: '600px',\n    height: '200px'\n};\nfunction DotMatrixHistogramDemo() {\n    const [dotMatrixHistogram, setDotMatrixHistogram] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n        setDotMatrixHistogram(new DotMatrixHistogram({\n            dom: '#container',\n            data: {\n                data: (0,_packages_dotMatrixHistogram_sample__WEBPACK_IMPORTED_MODULE_2__.default)().data,\n                seriesX: (0,_packages_dotMatrixHistogram_sample__WEBPACK_IMPORTED_MODULE_2__.default)().seriesX,\n                seriesTypes: (0,_packages_dotMatrixHistogram_sample__WEBPACK_IMPORTED_MODULE_2__.default)().seriesTypes\n            },\n            opts: {}\n        }));\n    }, []);\n    const update = () => {\n        if (dotMatrixHistogram) {\n            dotMatrixHistogram.update({\n                data: (0,_packages_dotMatrixHistogram_sample__WEBPACK_IMPORTED_MODULE_2__.default)().data,\n                seriesX: (0,_packages_dotMatrixHistogram_sample__WEBPACK_IMPORTED_MODULE_2__.default)().seriesX,\n                seriesTypes: (0,_packages_dotMatrixHistogram_sample__WEBPACK_IMPORTED_MODULE_2__.default)().seriesTypes\n            });\n        }\n    };\n    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"section\", null,\n        react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"section\", null,\n            react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { id: \"container\", style: containerStyle }),\n            react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_5__.default, { onClick: () => update(), type: \"primary\" }, \"update\")),\n        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_demoModel__WEBPACK_IMPORTED_MODULE_3__.default, { docs: _docs__WEBPACK_IMPORTED_MODULE_4__.default })));\n}\n\n\n//# sourceURL=webpack://un-u-yo/./example/demo/dotMatrixHistogram/index.tsx?");

/***/ }),

/***/ "./packages/dotMatrixHistogram/sample.ts":
/*!***********************************************!*\
  !*** ./packages/dotMatrixHistogram/sample.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"seriesX\": () => (/* binding */ seriesX),\n/* harmony export */   \"seriesTypes\": () => (/* binding */ seriesTypes),\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst seriesX = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',\n    'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];\nconst seriesTypes = ['A1', 'B1', 'C1'];\nconst getArr = (num) => {\n    return new Array(Number((Math.random() * num + 5).toFixed(0))).fill(0).map(() => {\n        return {\n            seriesType: seriesTypes[Number((Math.random() * (seriesTypes.length - 1)).toFixed(0))]\n        };\n    });\n};\nconst getData = () => {\n    seriesX.sort(() => { return Math.random() > 0.5 ? 1 : -1; });\n    return seriesX.map((t) => {\n        return {\n            seriesX: t,\n            data: getArr(Number((Math.random() * 80).toFixed(0)))\n        };\n    });\n};\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n    return {\n        data: getData(),\n        seriesX,\n        seriesTypes\n    };\n}\n;\n\n\n//# sourceURL=webpack://un-u-yo/./packages/dotMatrixHistogram/sample.ts?");

/***/ })

}]);