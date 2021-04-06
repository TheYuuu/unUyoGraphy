export const xPos = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
  'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

export const yPos = ['A1', 'B1', 'C1', 'D1', 'E1', 'F1', 'G1',
  'H1', 'I1', 'J1', 'K1', 'L1', 'M1', 'N1', 'O1', 'P1', 'Q1', 'R1',
    'S1', 'T1', 'U1', 'V1', 'W1', 'X1', 'Y1', 'Z1'];

const getData = () => {
  return new Array(300).fill(0).map(() => {
    return {
      value: Number((Math.random() * 100).toFixed(0)),
      xPos: xPos[Number((Math.random() * (xPos.length - 1)).toFixed(0))],
      yPos: yPos[Number((Math.random() * (yPos.length - 1)).toFixed(0))]
    }
  });
};


export default function() {
  return {
    data: getData(),
    xPos,
    yPos
  };
};