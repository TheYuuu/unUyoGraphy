/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkun_u_yo"] = self["webpackChunkun_u_yo"] || []).push([["example_demo_AxisHeadMap_tsx"],{

/***/ "./example/demo/AxisHeadMap.tsx":
/*!**************************************!*\
  !*** ./example/demo/AxisHeadMap.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AxisHeadMapDemo)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _src_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/index */ \"./src/index.ts\");\n/* harmony import */ var _packages_AxisHeadMap_sample__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../packages/AxisHeadMap/sample */ \"./packages/AxisHeadMap/sample.ts\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/button/index.js\");\n\n\n\n\nvar containerStyle = {\n    width: '500px',\n    height: '400px'\n};\nfunction AxisHeadMapDemo() {\n    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null), axisHeadMap = _a[0], setaxisHeadMap = _a[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n        setaxisHeadMap(new _src_index__WEBPACK_IMPORTED_MODULE_1__.AxisHeadMap({\n            dom: '#container',\n            mode: 'svg',\n            data: {\n                data: (0,_packages_AxisHeadMap_sample__WEBPACK_IMPORTED_MODULE_2__.default)().data,\n                seriesX: (0,_packages_AxisHeadMap_sample__WEBPACK_IMPORTED_MODULE_2__.default)().xPos,\n                seriesY: (0,_packages_AxisHeadMap_sample__WEBPACK_IMPORTED_MODULE_2__.default)().yPos\n            }\n        }));\n    }, []);\n    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"section\", null,\n        react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { id: \"container\", style: containerStyle }),\n        react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_3__.default, { onClick: function () { return update(); }, type: \"primary\" }, \"update\")));\n    function update() {\n        if (axisHeadMap) {\n            axisHeadMap.update({\n                data: (0,_packages_AxisHeadMap_sample__WEBPACK_IMPORTED_MODULE_2__.default)().data,\n                seriesX: (0,_packages_AxisHeadMap_sample__WEBPACK_IMPORTED_MODULE_2__.default)().xPos,\n                seriesY: (0,_packages_AxisHeadMap_sample__WEBPACK_IMPORTED_MODULE_2__.default)().yPos\n            });\n        }\n    }\n}\n\n\n//# sourceURL=webpack://un-u-yo/./example/demo/AxisHeadMap.tsx?");

/***/ }),

/***/ "./packages/AxisHeadMap/index.ts":
/*!***************************************!*\
  !*** ./packages/AxisHeadMap/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var _src_lib_chartBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/lib/chartBase */ \"./src/lib/chartBase.ts\");\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/index.js\");\n\n\n\nvar AxisHeadMap = /** @class */ (function (_super) {\n    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(AxisHeadMap, _super);\n    function AxisHeadMap(opt) {\n        var _this = _super.call(this, opt) || this;\n        _this.data = {\n            data: [],\n            seriesX: [],\n            seriesY: []\n        };\n        _this.opts = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, _this._opts), { mainColor: 'rgb(107 3 24)' });\n        _this.rectWidth = 0;\n        _this.topXAxisWidth = 0;\n        _this.leftScale = d3__WEBPACK_IMPORTED_MODULE_1__.scaleLinear();\n        _this.lineHeight = 0;\n        _this.topScale = d3__WEBPACK_IMPORTED_MODULE_1__.scaleLinear();\n        _this.dotScale = d3__WEBPACK_IMPORTED_MODULE_1__.scaleLinear();\n        _this.xPosAxis = d3__WEBPACK_IMPORTED_MODULE_1__.scaleOrdinal();\n        _this.top_g = null;\n        _this.left_g = null;\n        _this.dot_g = null;\n        _this.init();\n        _this.update(opt.data);\n        return _this;\n    }\n    AxisHeadMap.prototype.handleData = function (data) {\n        var seriesXIndexMap = {};\n        var seriesYIndexMap = {};\n        var seriesXData = [];\n        var seriesYData = [];\n        for (var i = 0; i < data.seriesX.length; i++) {\n            seriesXIndexMap[data.seriesX[i]] = i;\n            seriesXData.push({\n                name: data.seriesX[i],\n                value: 0\n            });\n        }\n        for (var i = 0; i < data.seriesY.length; i++) {\n            seriesYIndexMap[data.seriesY[i]] = i;\n            seriesYData.push({\n                name: data.seriesY[i],\n                value: 0\n            });\n        }\n        var dataMap = {};\n        var dataArr = [];\n        for (var i = 0; i < data.data.length; i++) {\n            if (!dataMap[data.data[i].xPos]) {\n                dataMap[data.data[i].xPos] = {};\n            }\n            if (!dataMap[data.data[i].xPos][data.data[i].yPos]) {\n                dataMap[data.data[i].xPos][data.data[i].yPos] = 0;\n            }\n            dataMap[data.data[i].xPos][data.data[i].yPos] += data.data[i].value;\n            seriesXData[seriesXIndexMap[data.data[i].xPos]].value += data.data[i].value;\n            seriesYData[seriesYIndexMap[data.data[i].yPos]].value += data.data[i].value;\n        }\n        for (var k1 in dataMap) {\n            for (var k2 in dataMap[k1]) {\n                dataArr.push({\n                    value: dataMap[k1][k2],\n                    xPos: k1,\n                    yPos: k2\n                });\n            }\n        }\n        this.data = {\n            data: dataArr,\n            seriesX: seriesXData,\n            seriesY: seriesYData\n        };\n    };\n    AxisHeadMap.prototype.init = function () {\n        this.lineHeight = this.containerHeight * 0.2;\n        if (!this.ctx) {\n            throw new Error('No useful ctx');\n            return;\n        }\n        this.top_g = this.ctx.append('g');\n        this.left_g = this.ctx.append('g');\n        this.dot_g = this.ctx.append('g');\n    };\n    AxisHeadMap.prototype.draw = function () {\n        var _a = this, lineHeight = _a.lineHeight, top_g = _a.top_g, left_g = _a.left_g, dot_g = _a.dot_g;\n        var topMaxX = d3__WEBPACK_IMPORTED_MODULE_1__.max(this.data.seriesX.map(function (v) { return v.value; }));\n        if (topMaxX === undefined) {\n            throw new Error();\n            return;\n        }\n        var topScale = d3__WEBPACK_IMPORTED_MODULE_1__.scaleLinear()\n            .domain([0, topMaxX])\n            .range([0, lineHeight]);\n        var maxLen = this.containerHeight < this.containerWidth ? this.containerHeight : this.containerWidth;\n        var topXAxisWidth = maxLen * 0.7 - this.data.seriesX.length;\n        var rectWidth = topXAxisWidth / this.data.seriesX.length;\n        if (!top_g) {\n            return;\n        }\n        var topRects = top_g.selectAll('.topRects')\n            .data(this.data.seriesX);\n        this.rectWidth = rectWidth;\n        this.topScale = topScale;\n        this.updateTopRects(topRects);\n        var rightMaxY = d3__WEBPACK_IMPORTED_MODULE_1__.max(this.data.seriesY.map(function (v) { return v.value; }));\n        if (rightMaxY === undefined) {\n            throw new Error();\n            return;\n        }\n        var leftScale = d3__WEBPACK_IMPORTED_MODULE_1__.scaleLinear()\n            .domain([0, rightMaxY])\n            .range([0, lineHeight]);\n        if (!left_g) {\n            return;\n        }\n        var leftRects = left_g.selectAll('.leftRects')\n            .data(this.data.seriesX);\n        this.topXAxisWidth = topXAxisWidth;\n        this.leftScale = leftScale;\n        this.updateLeftRects(leftRects);\n        var xPosAxis = d3__WEBPACK_IMPORTED_MODULE_1__.scaleOrdinal()\n            .domain(this.data.seriesX.map(function (v) { return v.name; }))\n            .range(new Array(this.data.seriesX.length).fill(0).map(function (item, index) { return index; }));\n        var dotR = rectWidth / 4;\n        var minDot = d3__WEBPACK_IMPORTED_MODULE_1__.min(this.data.data.map(function (v) { return Number(v.value); })) || 0;\n        var maxDot = d3__WEBPACK_IMPORTED_MODULE_1__.max(this.data.data.map(function (v) { return Number(v.value); })) || 0;\n        var dotScale = d3__WEBPACK_IMPORTED_MODULE_1__.scaleLinear()\n            .domain([minDot, maxDot])\n            .range([minDot === 0 ? 0 : dotR, dotR * 5]);\n        if (!dot_g) {\n            return;\n        }\n        var dots = dot_g.selectAll('.dots')\n            .data(this.data.data);\n        this.dotScale = dotScale;\n        this.xPosAxis = xPosAxis;\n        this.updateDots(dots);\n    };\n    AxisHeadMap.prototype.updateTopRects = function (topRects) {\n        var _a = this, rectWidth = _a.rectWidth, lineHeight = _a.lineHeight, topScale = _a.topScale;\n        var enter = topRects.enter();\n        var exit = topRects.exit();\n        topRects\n            .transition()\n            .duration(this.opts.duration)\n            .attr(\"x\", function (d, i) { return i * (rectWidth + 1); })\n            .attr(\"y\", function (d, i) { return lineHeight - topScale(d.value); })\n            .attr(\"width\", rectWidth)\n            .attr(\"height\", function (d) { return topScale(d.value); });\n        enter\n            .append('rect')\n            .attr('class', 'topRects')\n            .attr('fill', this.opts.mainColor)\n            .attr('transform', \"translate(\" + this.opts.padding + \", \" + this.opts.padding + \")\")\n            .attr(\"x\", function (d, i) { return i * (rectWidth + 1); })\n            .attr(\"y\", function (d, i) { return lineHeight; })\n            .attr(\"width\", rectWidth)\n            .attr(\"height\", 0)\n            .transition()\n            .duration(this.opts.duration)\n            .attr(\"y\", function (d, i) { return lineHeight - topScale(d.value); })\n            .attr(\"height\", function (d) { return topScale(d.value); });\n        exit\n            .transition()\n            .duration(this.opts.duration)\n            .attr(\"height\", 0)\n            .remove();\n    };\n    AxisHeadMap.prototype.updateLeftRects = function (leftRects) {\n        var _this = this;\n        var _a = this, rectWidth = _a.rectWidth, topXAxisWidth = _a.topXAxisWidth, leftScale = _a.leftScale;\n        var enter = leftRects.enter();\n        var exit = leftRects.exit();\n        leftRects\n            .transition()\n            .duration(this.opts.duration)\n            .attr(\"height\", rectWidth)\n            .attr('x', topXAxisWidth)\n            .attr(\"y\", function (d, i) { return (i * (rectWidth + 1)) + _this.containerHeight * 0.2; })\n            .attr(\"width\", function (d) { return leftScale(d.value); });\n        enter\n            .append('rect')\n            .attr('class', 'leftRects')\n            .attr(\"height\", rectWidth)\n            .attr('x', topXAxisWidth)\n            .attr(\"y\", function (d, i) { return (i * (rectWidth + 1)) + _this.containerHeight * 0.2; })\n            .attr('fill', this.opts.mainColor)\n            .attr('transform', \"translate(\" + (this.opts.padding + this.data.seriesX.length + rectWidth) + \", \" + (this.opts.padding + rectWidth) + \")\")\n            .transition()\n            .duration(this.opts.duration)\n            .attr(\"width\", function (d) { return leftScale(d.value); });\n        exit\n            .remove();\n    };\n    AxisHeadMap.prototype.updateDots = function (dots) {\n        var _a = this, rectWidth = _a.rectWidth, lineHeight = _a.lineHeight, dotScale = _a.dotScale, xPosAxis = _a.xPosAxis;\n        var enter = dots.enter();\n        var exit = dots.exit();\n        dots\n            .transition()\n            .duration(this.opts.duration)\n            .attr('cx', function (d) { return Number(xPosAxis(String(d.xPos))) * (rectWidth + 1) + rectWidth / 2; })\n            .attr('cy', function (d) { return Number(xPosAxis(String(d.yPos))) * (rectWidth + 1) + rectWidth / 2 + lineHeight; })\n            .attr('r', function (d) { return dotScale(d.value); });\n        enter\n            .append('circle')\n            .attr('class', 'dots')\n            .attr('opacity', '0.5')\n            .attr('cx', function (d) { return Number(xPosAxis(String(d.xPos))) * (rectWidth + 1) + rectWidth / 2; })\n            .attr('cy', function (d) { return Number(xPosAxis(String(d.yPos))) * (rectWidth + 1) + rectWidth / 2 + lineHeight; })\n            .attr('fill', this.opts.mainColor)\n            .attr('transform', \"translate(\" + this.opts.padding + \", \" + (this.opts.padding + rectWidth) + \")\")\n            .transition()\n            .duration(this.opts.duration)\n            .attr('r', function (d) { return dotScale(d.value); });\n        exit\n            .transition()\n            .duration(this.opts.duration)\n            .attr('r', 0)\n            .remove();\n    };\n    AxisHeadMap.prototype.update = function (data) {\n        this.handleData(data);\n        this.draw();\n    };\n    return AxisHeadMap;\n}(_src_lib_chartBase__WEBPACK_IMPORTED_MODULE_0__.ChartBase));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AxisHeadMap);\n\n\n//# sourceURL=webpack://un-u-yo/./packages/AxisHeadMap/index.ts?");

/***/ }),

/***/ "./packages/AxisHeadMap/sample.ts":
/*!****************************************!*\
  !*** ./packages/AxisHeadMap/sample.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"xPos\": () => (/* binding */ xPos),\n/* harmony export */   \"yPos\": () => (/* binding */ yPos),\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar xPos = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',\n    'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];\nvar yPos = ['A1', 'B1', 'C1', 'D1', 'E1', 'F1', 'G1',\n    'H1', 'I1', 'J1', 'K1', 'L1', 'M1', 'N1', 'O1', 'P1', 'Q1', 'R1',\n    'S1', 'T1', 'U1', 'V1', 'W1', 'X1', 'Y1', 'Z1'];\nvar getData = function () {\n    return new Array(250).fill(0).map(function () {\n        return {\n            value: Number((Math.random() * 100).toFixed(0)),\n            xPos: xPos[Number((Math.random() * (xPos.length - 1)).toFixed(0))],\n            yPos: yPos[Number((Math.random() * (yPos.length - 1)).toFixed(0))]\n        };\n    });\n};\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n    return {\n        data: getData(),\n        xPos: xPos,\n        yPos: yPos\n    };\n}\n;\n\n\n//# sourceURL=webpack://un-u-yo/./packages/AxisHeadMap/sample.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AxisHeadMap\": () => (/* reexport safe */ _packages_AxisHeadMap__WEBPACK_IMPORTED_MODULE_0__.default)\n/* harmony export */ });\n/* harmony import */ var _packages_AxisHeadMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../packages/AxisHeadMap */ \"./packages/AxisHeadMap/index.ts\");\n\n\n\n\n//# sourceURL=webpack://un-u-yo/./src/index.ts?");

/***/ }),

/***/ "./src/lib/Tools.ts":
/*!**************************!*\
  !*** ./src/lib/Tools.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isString\": () => (/* binding */ isString),\n/* harmony export */   \"isNumber\": () => (/* binding */ isNumber)\n/* harmony export */ });\nvar objToString = Object.prototype.toString;\nfunction isString(value) {\n    return objToString.call(value) === '[object String]';\n}\nfunction isNumber(value) {\n    return objToString.call(value) === '[object Number]';\n}\n\n\n//# sourceURL=webpack://un-u-yo/./src/lib/Tools.ts?");

/***/ }),

/***/ "./src/lib/chartBase.ts":
/*!******************************!*\
  !*** ./src/lib/chartBase.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ChartBase\": () => (/* binding */ ChartBase)\n/* harmony export */ });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var _Tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tools */ \"./src/lib/Tools.ts\");\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/index.js\");\n\n\n\nvar ChartBase = /** @class */ (function () {\n    function ChartBase(opt) {\n        // 画布\n        this.ctx = null;\n        // 图形设置\n        this._opts = {\n            padding: 5,\n            duration: 800\n        };\n        // 绘图有效宽度\n        this.containerWidth = 0;\n        // 绘图有效宽度\n        this.containerHeight = 0;\n        var qdom = null;\n        if ((0,_Tools__WEBPACK_IMPORTED_MODULE_0__.isString)(opt.dom)) {\n            var qd = document.querySelector(opt.dom);\n            qd && (qdom = qd);\n        }\n        else {\n            qdom = opt.dom;\n        }\n        if (!qdom)\n            throw new Error('No Dom Selected!');\n        this.containerWidth = qdom.offsetWidth;\n        this.containerHeight = qdom.offsetHeight;\n        if (opt.mode === 'svg') {\n            this.ctx = (0,d3__WEBPACK_IMPORTED_MODULE_1__.select)(qdom)\n                .append('svg')\n                .attr('width', this.containerWidth)\n                .attr('height', this.containerHeight);\n        }\n        this.containerWidth -= ((0,_Tools__WEBPACK_IMPORTED_MODULE_0__.isNumber)(this._opts.padding) ? 2 * this._opts.padding : 0);\n        this.containerHeight -= ((0,_Tools__WEBPACK_IMPORTED_MODULE_0__.isNumber)(this._opts.padding) ? 2 * this._opts.padding : 0);\n    }\n    ChartBase.prototype.updateGraph = function () {\n        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function () { return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_a) {\n            return [2 /*return*/];\n        }); });\n    };\n    ;\n    return ChartBase;\n}());\n\n\n\n//# sourceURL=webpack://un-u-yo/./src/lib/chartBase.ts?");

/***/ })

}]);