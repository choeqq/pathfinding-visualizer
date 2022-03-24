import {
  ROWS,
  COLS,
  START_NODE_COL,
  START_NODE_ROW,
  FINISH_NODE_ROW,
  FINISH_NODE_COL,
} from "../constants/grid-size";
import { NodeTypes } from "../types/node.type";

const createNode = (col: number, row: number): NodeTypes => {
  return {
    col,
    row,
    isStart: row === START_NODE_ROW && col === START_NODE_COL,
    isFinish: row === FINISH_NODE_ROW && col === FINISH_NODE_COL,
    distance: Infinity,
    isVisited: false,
    isWall: false,
    previousNode: null,
    onMouseDown: () => {},
    onMouseEnter: () => {},
    onMouseUp: () => {},
    g: 0,
    f: 0,
    h: 0,
    neighbors: [],
    addNeighbors: function (grid) {
      if (col > 0) this.neighbors!.push(grid[col - 1][row]);
      if (col < ROWS - 1) this.neighbors!.push(grid[col + 1][row]);
      if (row > 0) this.neighbors!.push(grid[col][row - 1]);
      if (row < COLS - 1) this.neighbors!.push(grid[col][row + 1]);
    },
  };
};

export const createInitialGrid = () => {
  const grid = [];
  for (let row = 0; row < ROWS; row++) {
    const currentRow = [];
    for (let col = 0; col < COLS; col++) {
      currentRow.push(createNode(col, row));
    }
    grid.push(currentRow);
  }
  return grid;
};
