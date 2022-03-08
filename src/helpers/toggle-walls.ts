import { NodeTypes } from "../types/node.type";

export const toggleWalls = (grid: NodeTypes[][], row: number, col: number) => {
  const newGrid = grid.slice();
  const node = newGrid[row][col];
  const newNode = {
    ...node,
    isWall: !node.isWall,
  };
  newGrid[row][col] = newNode;
  return newGrid;
};
