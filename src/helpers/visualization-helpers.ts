import { NodeTypes } from "../types/node.type";

export const animateShortestPath = (nodesInShortestPath: NodeTypes[]) => {
  for (let i = 0; i <= nodesInShortestPath.length; i++) {
    setTimeout(() => {
      const node = nodesInShortestPath[i];
      document.getElementById(`node-${node.row}-${node.col}`)!.className =
        "node node-shortest-path";
    }, 50 * i);
  }
};

export const animateAlgorithm = (
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
