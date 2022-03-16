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

const animateShortestPath = (nodesInShortestPath: NodeTypes[]) => {
  for (let i = 0; i <= nodesInShortestPath.length; i++) {
    setTimeout(() => {
      const node = nodesInShortestPath[i];
      document.getElementById(`node-${node.row}-${node.col}`)!.className =
        "node node-shortest-path";
    }, 50 * i);
  }
};

const animateDijkstra = (
  visitedNodesInOrder: NodeTypes[],
  nodesInShortestPathOrder: NodeTypes[]
) => {
  for (let i = 0; i <= visitedNodesInOrder.length; i++) {
    if (i === visitedNodesInOrder.length) {
      setTimeout(() => {
        animateShortestPath(nodesInShortestPathOrder);
      }, 10 * i);
      return;
    }
    setTimeout(() => {
      const node = visitedNodesInOrder[i];
      document.getElementById(`node-${node.row}-${node.col}`)!.className =
        "node node-visited";
    }, 10 * i);
  }
};

const visualizeDijkstra = (grid: NodeTypes[][]) => {
  const startNode = grid[START_NODE_ROW][START_NODE_COL];
  const finishNode = grid[FINISH_NODE_ROW][FINISH_NODE_COL];
  const visitedNodesInOrder = dijkstra(grid, startNode, finishNode);
  const nodeInShortestPath = getNodesInShortestPathOrder(finishNode);
  animateDijkstra(visitedNodesInOrder!, nodeInShortestPath);
};

export default visualizeDijkstra;
