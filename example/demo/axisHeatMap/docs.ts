export default {
  chartsDesc: [
    "对于二维分布场景的数据集来说，可以依靠热力图来观察其度量分布特征，此图例在热力图的表现形式上，增加两轴的统计，可以更加直观地观察到两个维度的分布情况",
    "建议容器高宽比例4:5",
    "出处链接: https://flowingdata.com/2019/12/16/grid-map-histogram-ggplot/",
  ],
  useDesc: ["任意二维维度的分布数据"],
  dataDesc: [
    `
    interface axisHeatMapOptionData {
      data: axisHeatMapData[];
      seriesX: string[]; // 数据中xPos的集合
      seriesY: string[]; // 数据中yPos的集合
    }

    interface axisHeatMapData {
      value: number;
      xPos: string | number;
      yPos: string | number;
    }
  `,
  ],
  optsData: [
    {
      key: "1",
      params: "mainColor",
      desc: "图表默认的一致性主色调",
      type: "string",
      default: "rgb(107, 3, 24)",
    },
  ],
  methodData: [
    {
      key: "1",
      params: "update",
      desc: "更新数据",
      type: `(data: axisHeatMapOptionData) => void`,
      default: "-",
    },
  ],
};
