import { NodeTypes } from "../types/node.type";
import {
  START_NODE_COL,
  START_NODE_ROW,
  FINISH_NODE_ROW,
  FINISH_NODE_COL,
} from "../constants/grid-size";
import aStar from "../algorithms/aStar/aStar";
import { animateAlgorithm } from "./visualization-helpers";

const visualizeAstar = (grid: NodeTypes[][]) => {
  const startNode = grid[START_NODE_ROW][START_NODE_COL];
  const finishNode = grid[FINISH_NODE_ROW][FINISH_NODE_COL];
  const { visitedNodes, path } = aStar(startNode, finishNode);
  animateAlgorithm(visitedNodes!, path);
};

export default visualizeAstar;
