/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkun_u_yo"] = self["webpackChunkun_u_yo"] || []).push([["example_demo_rankTrendsLine_index_tsx"], {

/***/ "./example/demo/rankTrendsLine/docs.ts":
/*!*********************************************!*\
  !*** ./example/demo/rankTrendsLine/docs.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

      "use strict";
      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    chartsDesc: [\n        '图表描述'\n    ],\n    useDesc: [\n        '使用场景'\n    ],\n    dataDesc: [\n        '数据集说明'\n    ],\n    optsData: [\n        {\n            key: '1',\n            params: 'todo',\n            desc: 'todo',\n            type: 'string',\n            default: 'todo'\n        }\n    ],\n    methodData: [\n        {\n            key: '1',\n            params: 'todo',\n            desc: 'todo',\n            type: 'todo',\n            default: 'todo'\n        }\n    ]\n});\n\n\n//# sourceURL=webpack://un-u-yo/./example/demo/rankTrendsLine/docs.ts?");

      /***/
}),

/***/ "./example/demo/rankTrendsLine/index.tsx":
/*!***********************************************!*\
  !*** ./example/demo/rankTrendsLine/index.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

      "use strict";
      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ RankTrendsLineDemo)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _demoModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../demoModel */ \"./example/demo/demoModel.tsx\");\n/* harmony import */ var _docs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./docs */ \"./example/demo/rankTrendsLine/docs.ts\");\n/* harmony import */ var _packages_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/packages/index */ \"./packages/rankTrendsLine/index.ts\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/button/index.js\");\n\n\n\n// import MarkdownContent from '@lib/markdownContent';\n// import contributing from './contributing.md';\n\n\nconst containerStyle = {\n    width: \"800px\",\n    height: \"400px\",\n    marginBottom: '20px'\n};\nconst mockData1 = {\n    xPos: [\"2019\", \"2020\", \"2021\"],\n    series: [\n        {\n            name: \"A\",\n            values: [1, 7, 5],\n        },\n        {\n            name: \"B\",\n            values: [2, 1, 3],\n        },\n        {\n            name: \"C\",\n            values: [3, 2, 4],\n        },\n        {\n            name: \"D\",\n            values: [4, 5, 2],\n        },\n        {\n            name: \"E\",\n            values: [5, 4, 1],\n        },\n        {\n            name: \"F\",\n            values: [6, 3, 6],\n        },\n        {\n            name: \"G\",\n            values: [7, 6, 7],\n        },\n    ],\n};\nconst mockData2 = {\n    xPos: [\"2019\", \"2020\", \"2021\"],\n    series: [\n        {\n            name: \"A\",\n            values: [3, 2, 4],\n        },\n        {\n            name: \"B\",\n            values: [5, 4, 1],\n        },\n        {\n            name: \"C\",\n            values: [1, 7, 5],\n        },\n        {\n            name: \"D\",\n            values: [7, 6, 7],\n        },\n        {\n            name: \"E\",\n            values: [2, 1, 3],\n        },\n        {\n            name: \"F\",\n            values: [4, 5, 2],\n        },\n        {\n            name: \"G\",\n            values: [6, 3, 6],\n        },\n    ],\n};\nfunction RankTrendsLineDemo() {\n    const [rankTrendsLine, setRankTrendsLine] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);\n    const [trigger, setTrigger] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n        setRankTrendsLine(new _packages_index__WEBPACK_IMPORTED_MODULE_3__.default({\n            dom: \"#container\",\n            data: mockData1,\n            Opts: {},\n        }));\n    }, []);\n    const update = () => {\n        if (rankTrendsLine) {\n            setTrigger(!trigger);\n            rankTrendsLine.update(trigger ? mockData1 : mockData2);\n        }\n    };\n    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"section\", null,\n        react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"section\", null,\n            react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { id: \"container\", style: containerStyle }),\n            react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_4__.default, { onClick: () => update(), type: \"primary\" }, \"update\")),\n        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_demoModel__WEBPACK_IMPORTED_MODULE_1__.default, { docs: _docs__WEBPACK_IMPORTED_MODULE_2__.default })));\n}\n\n\n//# sourceURL=webpack://un-u-yo/./example/demo/rankTrendsLine/index.tsx?");

      /***/
}),

/***/ "./packages/rankTrendsLine/index.ts":
/*!******************************************!*\
  !*** ./packages/rankTrendsLine/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

      "use strict";
      eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ RankTrendsLine)\n/* harmony export */ });\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/index.js\");\n/* harmony import */ var _chartBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chartBase */ \"./packages/chartBase.ts\");\n\n\nclass RankTrendsLine extends _chartBase__WEBPACK_IMPORTED_MODULE_1__.default {\n    constructor(opt) {\n        super(opt);\n        this.Opts = {\n            colors: [\n                \"#96BBDA\",\n                \"#FFC194\",\n                \"#9ED19A\",\n                \"#EF9997\",\n                \"#CAB3DF\",\n                \"#C6ABA6\",\n                \"#c5c1c1\",\n            ],\n            xPosLabelColor: \"#a0a4a9\",\n            xPadding: 80,\n            yPadding: 50,\n            dotWidth: 10,\n            lineStrokeWidth: 5,\n            labelFontSize: 14,\n            ...this._opts,\n        };\n        this.initFlag = false;\n        if (!this.ctx) {\n            throw new Error(\"No useful ctx\");\n        }\n        this.line_g = this.ctx.append(\"g\");\n        this.dot_g = this.ctx.append(\"g\");\n        this.label_g = this.ctx.append(\"g\");\n        this.xPosLabel_g = this.ctx.append(\"g\");\n        this.init(opt.data);\n        this.update();\n    }\n    init(data) {\n        this.data = data;\n        const maxRank = (0,d3__WEBPACK_IMPORTED_MODULE_0__.max)(data.series.map((el) => el.values).flat());\n        const xStep = (this.containerWidth - this.Opts.xPadding * 2) / (data.xPos.length);\n        this.xStep = xStep;\n        this.yStep =\n            (this.containerHeight - this.Opts.yPadding * 2) / (maxRank - 1);\n        this.getXPos = (index) => {\n            if (index === 0) {\n                return this.Opts.xPadding;\n            }\n            if (index === 1) {\n                return this.Opts.xPadding + xStep / 2;\n            }\n            if (index === data.xPos.length) {\n                return this.containerWidth - this.Opts.xPadding - xStep / 2;\n            }\n            if (index === data.xPos.length + 1) {\n                return this.containerWidth - this.Opts.xPadding;\n            }\n            return this.getXPos(index - 1) + this.xStep;\n        };\n    }\n    update(data) {\n        if (data) {\n            this.data = data;\n            this.init(data);\n        }\n        this.updateLine();\n        this.updateCircle();\n        this.updateSeriesLabel();\n        this.updateXPosLabel();\n        this.initFlag = true;\n    }\n    updateLine() {\n        const { line_g, Opts, data, yStep, getXPos, initFlag } = this;\n        const lines = line_g.selectAll(\".rankLine\").data(data.series);\n        const enter = lines.enter();\n        const exit = lines.exit();\n        const p = (0,d3__WEBPACK_IMPORTED_MODULE_0__.line)()\n            .x(function (d, i) {\n            return getXPos(d[0]);\n        })\n            .y(function (d, i) {\n            return d[1] * yStep;\n        })\n            .curve(d3__WEBPACK_IMPORTED_MODULE_0__.curveMonotoneX);\n        const pathRe = (d) => {\n            const realArr = data.xPos.map((el, index) => [\n                index + 1,\n                d.values[index],\n            ]);\n            const arr = [\n                [0, d.values[0]],\n                ...realArr,\n                [data.xPos.length + 1, d.values[d.values.length - 1]],\n            ];\n            return p(arr);\n        };\n        exit\n            .transition()\n            .duration(Opts.duration / 2)\n            .remove();\n        lines\n            .transition()\n            .duration(Opts.duration)\n            .attr(\"d\", pathRe)\n            .attr(\"stroke-dasharray\", 0);\n        enter\n            .append(\"path\")\n            .attr(\"class\", \"rankLine\")\n            .attr(\"stroke\", (d, i) => Opts.colors[i])\n            .attr(\"stroke-width\", `${Opts.lineStrokeWidth}px`)\n            .attr(\"fill\", \"none\")\n            .attr(\"d\", pathRe);\n        const getLen = (node) => {\n            const totalLength = (0,d3__WEBPACK_IMPORTED_MODULE_0__.select)(node).node().getTotalLength();\n            return totalLength;\n        };\n        if (!initFlag) {\n            (0,d3__WEBPACK_IMPORTED_MODULE_0__.selectAll)(\".rankLine\")\n                .attr(\"stroke-dasharray\", function (d, i) {\n                return getLen(this) + \" \" + getLen(this);\n            })\n                .attr(\"stroke-dashoffset\", function () {\n                return getLen(this);\n            })\n                .transition()\n                .duration(Opts.duration * 1.5)\n                .ease(d3__WEBPACK_IMPORTED_MODULE_0__.easeLinear)\n                // .delay((d, i) => { return i * Opts.duration * 0.3 })\n                .attr(\"stroke-dashoffset\", 0);\n        }\n    }\n    updateCircle() {\n        const { dot_g, Opts, data, yStep, getXPos } = this;\n        const nodes = data.xPos.map((_, index) => {\n            return data.series.map((item, idx) => {\n                return [index + 1, item.values[index], idx];\n            });\n        }).flat();\n        const dots = dot_g.selectAll(`.circleItem`).data(nodes);\n        const enter = dots.enter();\n        const exit = dots.exit();\n        exit\n            .transition()\n            .duration(Opts.duration / 2)\n            .remove();\n        dots\n            .transition()\n            .duration(Opts.duration)\n            .attr(\"cx\", (d) => getXPos(d[0]))\n            .attr(\"cy\", (d, i) => {\n            return (d[1]) * yStep;\n        });\n        enter\n            .append(\"circle\")\n            .attr(\"class\", 'circleItem')\n            .attr(\"fill\", (d, i) => Opts.colors[d[2]])\n            .attr(\"cx\", (d) => getXPos(d[0]) - 20)\n            .attr(\"cy\", (d, i) => {\n            return (d[1]) * yStep;\n        })\n            .transition()\n            .duration(Opts.duration)\n            .delay((d) => Opts.duration * 0.5 * d[0])\n            .attr(\"cx\", (d) => getXPos(d[0]))\n            .attr(\"r\", Opts.dotWidth);\n    }\n    updateSeriesLabel() {\n        const { label_g, Opts, data, yStep, getXPos } = this;\n        const nodes = [0, data.xPos.length + 1].map(index => {\n            return [...data.series.map((item, idx) => {\n                    return [index, item.values[index] ?? item.values[item.values.length - 1], idx, item.name];\n                })];\n        }).flat();\n        const labels = label_g.selectAll(`.label`).data(nodes);\n        const enter = labels.enter();\n        const exit = labels.exit();\n        exit\n            .transition()\n            .duration(Opts.duration / 2)\n            .remove();\n        labels\n            .transition()\n            .duration(Opts.duration)\n            .attr(\"x\", (d) => getXPos(d[0]))\n            .attr(\"y\", (d, i) => {\n            return d[1] * yStep;\n        });\n        enter\n            .append(\"text\")\n            .attr(\"class\", `label`)\n            .text((d) => d[3])\n            .attr(\"fill\", (d, i) => Opts.colors[d[2]])\n            .attr(\"font-size\", Opts.labelFontSize)\n            .attr(\"x\", (d) => getXPos(d[0]) - 20)\n            .attr(\"y\", (d, i) => {\n            return d[1] * yStep;\n        })\n            .attr(\"transform\", function (d, i) {\n            const item = (0,d3__WEBPACK_IMPORTED_MODULE_0__.select)(this).node()?.getBBox();\n            return item\n                ? `translate(${d[0] === 0 ? Number(`-${item.width + 10}`) : 10}, ${item?.height / 4})`\n                : null;\n        })\n            .style(\"display\", \"none\")\n            .transition()\n            .duration(Opts.duration)\n            .delay((d) => Opts.duration * 0.3 * d[0])\n            .attr(\"x\", (d) => getXPos(d[0]))\n            .style(\"display\", \"inline\");\n    }\n    updateXPosLabel() {\n        const { label_g, Opts, data, getXPos } = this;\n        const labels = label_g.selectAll(`.xPosLabel`).data(data.xPos);\n        const enter = labels.enter();\n        const exit = labels.exit();\n        exit\n            .transition()\n            .duration(Opts.duration / 2)\n            .remove();\n        labels\n            .transition()\n            .duration(Opts.duration)\n            .attr(\"x\", (d, i) => getXPos(i + 1))\n            .attr(\"y\", Opts.yPadding);\n        enter\n            .append(\"text\")\n            .attr(\"class\", `xPosLabel`)\n            .text((d, i) => d)\n            .attr(\"fill\", Opts.xPosLabelColor)\n            .attr(\"font-size\", Opts.labelFontSize)\n            .attr(\"x\", (d, i) => getXPos(i + 1))\n            .attr(\"y\", Opts.yPadding / 3)\n            .attr(\"transform\", function (d, i) {\n            const item = (0,d3__WEBPACK_IMPORTED_MODULE_0__.select)(this).node()?.getBBox();\n            return item\n                ? `translate(${-item.width / 2}, ${-(item?.height / 2 +\n                    Opts.dotWidth)})`\n                : null;\n        })\n            .style(\"display\", \"none\")\n            .transition()\n            .duration(Opts.duration)\n            .ease(d3__WEBPACK_IMPORTED_MODULE_0__.easeBounce)\n            .delay((d, i) => Opts.duration * 0.3 * i)\n            .attr(\"y\", Opts.yPadding)\n            .style(\"display\", \"inline\");\n    }\n}\n\n\n//# sourceURL=webpack://un-u-yo/./packages/rankTrendsLine/index.ts?");

      /***/
})

}]);