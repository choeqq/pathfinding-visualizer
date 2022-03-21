import dijkstra, {
  getNodesInShortestPathOrder,
} from "../algorithms/dijkstra/dijkstras";
import {
  START_NODE_ROW,
  START_NODE_COL,
  FINISH_NODE_COL,
  FINISH_NODE_ROW,
} from "../constants/grid-size";
import { NodeTypes } from "../types/node.type";
import { animateAlgorithm } from "./visualization-helpers";

const visualizeDijkstra = (grid: NodeTypes[][]) => {
  const startNode = grid[START_NODE_ROW][START_NODE_COL];
  const finishNode = grid[FINISH_NODE_ROW][FINISH_NODE_COL];
  const visitedNodesInOrder = dijkstra(grid, startNode, finishNode);
  const nodeInShortestPath = getNodesInShortestPathOrder(finishNode);
  animateAlgorithm(visitedNodesInOrder!, nodeInShortestPath);
};

export default visualizeDijkstra;
