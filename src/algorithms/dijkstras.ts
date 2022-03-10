import { NodeTypes } from "../types/node.type";

export default function dijkstra(
  grid: NodeTypes[][],
  startNode: NodeTypes,
  finishNode: NodeTypes
) {
  const visitedNodesInOrder: NodeTypes[] = [];
  startNode.distance = 0;
  const unvisitedNodes: NodeTypes[] = getAllNodes(grid);
  while (!!unvisitedNodes.length) {
    sortNodesByDistance(unvisitedNodes);
    const closestNode = unvisitedNodes.shift();

    if (closestNode?.isWall) continue;

    if (closestNode?.distance === Infinity) {
      return visitedNodesInOrder;
    }
    closestNode!.isVisited = true;
    visitedNodesInOrder.push(closestNode!);
    if (closestNode === finishNode) return visitedNodesInOrder;
    updateUnvisitedNeighbors(closestNode!, grid);
  }
}

function sortNodesByDistance(unvisitedNodes: NodeTypes[]) {
  unvisitedNodes.sort((nodeA, nodeB) => nodeA.distance - nodeB.distance);
}

function updateUnvisitedNeighbors(node: NodeTypes, grid: NodeTypes[][]) {
  const unvisitedNeighbors = getUnvisitedNeighbors(node, grid);
  for (const neighbor of unvisitedNeighbors) {
    neighbor.distance = node.distance + 1;
    neighbor.previousNode = node;
  }
}

function getUnvisitedNeighbors(node: NodeTypes, grid: NodeTypes[][]) {
  const neighbors = [];
  const { row, col } = node;
  if (row > 0) neighbors.push(grid[row - 1][col]);
  if (row < grid.length) neighbors.push(grid[row + 1][col]);
  if (col > 0) neighbors.push(grid[row][col - 1]);
  if (col < grid.length) neighbors.push(grid[row][col + 1]);
  return neighbors.filter((n) => !n.isVisited);
}

function getAllNodes(grid: NodeTypes[][]): NodeTypes[] {
  const nodes = [];
  for (const row of grid) {
    for (const node of row) {
      nodes.push(node);
    }
  }
  return nodes;
}
