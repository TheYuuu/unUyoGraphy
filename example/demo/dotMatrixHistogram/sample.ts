export const seriesX = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

export const seriesTypes = ["A1", "B1", "C1"];

const getArr = (num: number) => {
  return new Array(Number((Math.random() * num + 5).toFixed(0)))
    .fill(0)
    .map(() => {
      return {
        seriesType:
          seriesTypes[
            Number((Math.random() * (seriesTypes.length - 1)).toFixed(0))
          ],
      };
    });
};

const getData = () => {
  seriesX.sort(() => {
    return Math.random() > 0.5 ? 1 : -1;
  });

  return seriesX.map((t) => {
    return {
      seriesX: t,
      data: getArr(Number((Math.random() * 80).toFixed(0))),
    };
  });
};

export default function () {
  return {
    data: getData(),
    seriesX,
    seriesTypes,
  };
}
