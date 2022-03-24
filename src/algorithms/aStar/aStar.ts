import { NodeTypes } from "../../types/node.type";

export default function aStar(startNode: NodeTypes, endNode: NodeTypes) {
  let openSet = [];
  let closedSet = [];
  let path: NodeTypes[] = [];
  let visitedNodes: NodeTypes[] = [];

  openSet.push(startNode);

  while (openSet.length > 0) {
    let leastIndex = 0;
    for (let i = 0; i < openSet.length; i++) {
      if (openSet[i].f! < openSet[leastIndex].f!) {
        leastIndex = i;
      }
    }
    let current: NodeTypes = openSet[leastIndex];
    visitedNodes.push(current);

    if (current === endNode) {
      let temp = current;
      path.push(temp);
      while (temp.previous) {
        path.push(temp.previous);
        temp = temp.previous;
      }
      return { path, visitedNodes };
    }

    openSet = openSet.filter((e) => e !== current);
    closedSet.push(current);

    let neighbors = current.neighbors;
    for (let i = 0; i < neighbors!.length; i++) {
      let neighbor = neighbors![i];
      if (!closedSet.includes(neighbor)) {
        let tempG = current.g! + 1;
        let newPath = false;
        if (openSet.includes(neighbor)) {
          if (tempG < neighbor.g!) {
            neighbor.g = tempG;
            newPath = true;
          }
        } else {
          neighbor.g = tempG;
          newPath = true;
          openSet.push(neighbor);
        }

        if (newPath) {
          if (neighbor.g && neighbor.f) {
            neighbor.h = heuristic(neighbor, endNode);
            neighbor.f = neighbor.g + neighbor.f;
            neighbor.previous = current;
          }
        }
      }
    }
  }
  return { path, visitedNodes, error: "No path found :(" };
}

function heuristic(a: NodeTypes, b: NodeTypes) {
  let d = Math.abs(a.col - a.row) + Math.abs(b.col - b.row);
  return d;
}
