/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkun_u_yo"] = self["webpackChunkun_u_yo"] || []).push([["example_demo_dotMatrixHistogram_sample_ts"],{

/***/ "./example/demo/dotMatrixHistogram/sample.ts":
/*!***************************************************!*\
  !*** ./example/demo/dotMatrixHistogram/sample.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"seriesX\": () => (/* binding */ seriesX),\n/* harmony export */   \"seriesTypes\": () => (/* binding */ seriesTypes),\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst seriesX = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',\n    'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];\nconst seriesTypes = ['A1', 'B1', 'C1'];\nconst getArr = (num) => {\n    return new Array(Number((Math.random() * num + 5).toFixed(0))).fill(0).map(() => {\n        return {\n            seriesType: seriesTypes[Number((Math.random() * (seriesTypes.length - 1)).toFixed(0))]\n        };\n    });\n};\nconst getData = () => {\n    seriesX.sort(() => { return Math.random() > 0.5 ? 1 : -1; });\n    return seriesX.map((t) => {\n        return {\n            seriesX: t,\n            data: getArr(Number((Math.random() * 80).toFixed(0)))\n        };\n    });\n};\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n    return {\n        data: getData(),\n        seriesX,\n        seriesTypes\n    };\n}\n;\n\n\n//# sourceURL=webpack://un-u-yo/./example/demo/dotMatrixHistogram/sample.ts?");

/***/ })

}]);