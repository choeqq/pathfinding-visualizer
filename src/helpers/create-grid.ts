import {
  ROWS,
  COLS,
  START_NODE_COL,
  START_NODE_ROW,
  FINISH_NODE_ROW,
  FINISH_NODE_COL,
} from "../constants/grid-size";
import { CreateNodeTypes } from "./types";
import { Node } from "../types/node";

const createNode = ({ row, col }: CreateNodeTypes): Node => {
  return {
    col,
    row,
    isStart: row === START_NODE_ROW && col === START_NODE_COL,
    isFinish: row === FINISH_NODE_ROW && col === FINISH_NODE_COL,
    distance: Infinity,
    isVisited: false,
    isWall: false,
    previousNode: null,
  };
};

export const createInitialGrid = () => {
  const grid = [];
  for (let row = 0; row < ROWS; row++) {
    let currRow = [];
    for (let col = 0; col < COLS; col++) {
      currRow.push(createNode({ col, row }));
    }
    grid.push(currRow);
  }
  return grid;
};
