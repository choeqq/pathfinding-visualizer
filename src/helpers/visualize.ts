import aStar from "../algorithms/aStar/aStar";
import dijkstra from "../algorithms/dijkstra/dijkstras";
import {
  FINISH_NODE_COL,
  FINISH_NODE_ROW,
  START_NODE_COL,
  START_NODE_ROW,
} from "../constants/grid-start-finish";
import { NodeTypes } from "../types/node.type";
import Graph from "../algorithms/dfs-bfs/DFS-BFS";

export const visualize = (
  algo: string,
  grid: NodeTypes[][],
  isRunning: boolean
) => {
  if (!isRunning) {
    const startNode = grid[START_NODE_ROW][START_NODE_COL];
    const finishNode = grid[FINISH_NODE_ROW][FINISH_NODE_COL];
    let visitedNodesInOrder: any;
    switch (algo) {
      case "Dijkstra":
        visitedNodesInOrder = dijkstra(grid, startNode, finishNode);
        break;
      case "AStar":
        visitedNodesInOrder = aStar(startNode, finishNode);
        break;
      case "BFS":
        visitedNodesInOrder = Graph.bfs(grid, startNode, finishNode);
        break;
      case "DFS":
        visitedNodesInOrder = Graph.dfs(grid, startNode, finishNode);
        break;
      // should never get there :)
      default:
        break;
    }
    return visitedNodesInOrder;
  }
};
