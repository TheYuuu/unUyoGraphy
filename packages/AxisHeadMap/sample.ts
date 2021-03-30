export const xPos = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K'];
export const yPos = ['A1', 'B1', 'C1', 'D1', 'E1', 'F1', 'G1', 'H1', 'I1', 'J1', 'K1'];

const data = new Array(100).fill(0).map(() => {
  return {
    value: Number((Math.random() * 100).toFixed(0)),
    xPos: xPos[Number((Math.random() * 10).toFixed(0))],
    yPos: yPos[Number((Math.random() * 10).toFixed(0))]
  }
});


export default {
  data,
  xPos,
  yPos
};