## 图表说明

对于二维分布场景的数据集来说，可以依靠热力图来观察其度量分布特征，此图例在热力图的表现形式上，增加两轴的统计，可以更加直观地观察到两个维度的分布情况

建议容器高宽比例4:5

出处链接: https://flowingdata.com/2019/12/16/grid-map-histogram-ggplot/

## 推荐场景

经纬度下的人口分布情况

## 数据集

```js
    interface AxisHeatMapData {
      value: number;
      xPos: string | number;
      yPos: string | number;
    }[]
```

## Opts

| 参数          | 说明                | 类型                | 可选值 | 默认值 |
| ------------- | ------------------- | ------------------- | ------ | ------ |
| labelPosition | 标签的位置默认为top | top / left / string | —      | left   |

## Method
