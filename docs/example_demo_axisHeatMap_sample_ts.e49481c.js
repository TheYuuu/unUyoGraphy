/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkun_u_yo"] = self["webpackChunkun_u_yo"] || []).push([["example_demo_axisHeatMap_sample_ts"],{

/***/ "./example/demo/axisHeatMap/sample.ts":
/*!********************************************!*\
  !*** ./example/demo/axisHeatMap/sample.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"xPos\": () => (/* binding */ xPos),\n/* harmony export */   \"yPos\": () => (/* binding */ yPos),\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst xPos = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',\n    'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];\nconst yPos = ['A1', 'B1', 'C1', 'D1', 'E1', 'F1', 'G1',\n    'H1', 'I1', 'J1', 'K1', 'L1', 'M1', 'N1', 'O1', 'P1', 'Q1', 'R1',\n    'S1', 'T1', 'U1', 'V1', 'W1', 'X1', 'Y1', 'Z1'];\nconst getData = () => {\n    return new Array(250).fill(0).map(() => {\n        return {\n            value: Number((Math.random() * 100).toFixed(0)),\n            xPos: xPos[Number((Math.random() * (xPos.length - 1)).toFixed(0))],\n            yPos: yPos[Number((Math.random() * (yPos.length - 1)).toFixed(0))]\n        };\n    });\n};\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n    return {\n        data: getData(),\n        xPos,\n        yPos\n    };\n}\n;\n\n\n//# sourceURL=webpack://un-u-yo/./example/demo/axisHeatMap/sample.ts?");

/***/ })

}]);