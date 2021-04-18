# unUyoGraphy
## 说明
实现了平时收集的一些有意思的图表，每个图表说明标注了出处，并且会与来源作者联系，如有侵权请联系@luoyu.creative@icloud.com。

完全使用TS实现，v1版本使用svg依赖d3，计划v2用zrender支持canvas。

<a href="https://theyuuu.github.io/unUyoGraphy/#/components/preview">点击预览</a>

## 使用
### 安装
```js
npm install un-u-yo
```
### 使用
```js
import unUyo from 'un-u-yo'
const  { AxisHeatMap }  = unUyo;
// or
// import { AxisHeatMap } from 'un-u-yo'

const axisHeatMap = new AxisHeatMap({
  dom: '#container',
  data: {},
  opts: {}
});

// 基础配置如上，不同的图表所需的data，以及支持的配置opts在文档中有描述
```