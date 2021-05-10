export default {
  chartsDesc: [
    '直方图用于表示数据变化情况以及规则性，能够通过其比较直观地看出数据特性的分布状态，本图利在直方图的每个间围内，用点阵的形式，通过颜色展现不同数据的维度。'
  ],
  useDesc: [
    '当直方图每个数据来源都存在的时候，可以对每个数据进行直方统计并通过颜色标记数据的一个维度。'
  ],
  dataDesc: [
  `
    export interface dotMatrixHistogramOptionData {
      data: dotMatrixHistogramData[];
      seriesX: string[];
      seriesTypes: string[];
    }

    export interface dotMatrixHistogramData {
      seriesX: string;
      data: dotMatrixHistogramDotData[]
    }

    export interface dotMatrixHistogramDotData {
      seriesType: string;
    }
  `
  ],
  optsData: [
    {
      key: '1',
      params: 'bars',
      desc: '每个间围一行存在多少个点',
      type: 'number',
      default: '3'
    },
    {
      key: '2',
      params: 'barPadding',
      desc: '间围的间距',
      type: 'number',
      default: '5'
    },
    {
      key: '3',
      params: 'colors',
      desc: 'seriesTypes 按顺序对应的颜色',
      type: 'string[]',
      default: `['#96BBDA', '#FFC194', '#9ED19A', '#EF9997', '#CAB3DF', '#C6ABA6'] `
    }
  ],
  methodData: [
    {
      key: '1',
      params: 'update',
      desc: '更新数据',
      type: `(data: dotMatrixHistogramOptionData) => void`,
      default: '-'
    }
  ]
}
  