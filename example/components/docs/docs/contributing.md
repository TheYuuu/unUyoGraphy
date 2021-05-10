## 行为准则
每个图表提供一个class，在其构造函数里传参，返回具有操作方法的对象。

在思考Functional Programming还是OOP。🤔
## 分支管理
新组件或者bug、feature新增请pull request到dev分支，dist分支用于打包发布到github page。

## Bugs
有使用问题请提GitHub Issues https://github.com/TheYuuu/unUyoGraphy/issues  

## 命令说明
输入图表中文名称，英文名称自动新建配置文件
```js
npm run new
```

运行展示demo
```js
npm run dev
```

打包展示demo
```js
npm run dev:build
```

打包unUyo库
```js
npm run dist
```

## 文件说明
```html
./unUyoGraphy
├─types
|   ├─axisHeatMap.d.ts // 图表type文件
|   ├─chartBase.d.ts // 基类type文件
|   ├─index.d.ts
|   └─unUyo.d.ts
├─src
|  └─index.ts // 抛出引用入口
├─packages
|    ├─axisHeatMap // 图表对应的开发文件夹
|    |      ├─index.ts
|    |      └─sample.ts // 可以通过sample.ts提供所需的随机数据函数
└─example
     ├─charts.json  // 路由定义描述
     └─demo
        └─axisHeatMap // 图表的demo展示页面
               ├─contributing.md // 可以通过contributing.md编写文档
               ├─docs.ts // 也可以使用预置的模板docs.ts来导出json描述
               └─index.tsx
```