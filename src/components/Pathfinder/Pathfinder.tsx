import React, { useState } from "react";
import { NodeTypes } from "../../types/node.type";
import Node from "../Node/Node";
import { createInitialGrid } from "../../helpers/create-grid";
import { toggleWalls } from "../../helpers/toggle-walls";
import { Container, GridContainer } from "./PathfinderStyles";
import visualizeDijkstra from "../../helpers/visualize-dijkstra";
import visualizeAstar from "../../helpers/visualizeAstar";

const Pathfinder: React.FC = () => {
  const [grid, setGrid] = useState<NodeTypes[][]>(() => createInitialGrid());
  const [cleared, setCleared] = useState(false);
  const [mouseIsPressed, setMouseIsPressed] = useState<boolean>(false);

  const handleMouseDown = (row: number, col: number) => {
    const newGrid = toggleWalls(grid, row, col);
    setGrid(newGrid);
    setMouseIsPressed(true);
  };

  const handleMouseEnter = (row: number, col: number) => {
    if (!mouseIsPressed) return;
    const newGrid = toggleWalls(grid, row, col);
    setGrid(newGrid);
  };

  const handleMouseUp = () => {
    setMouseIsPressed(false);
  };

  const clearGrid = () => {
    grid.forEach((row) => {
      row.forEach((node) => {
        document.getElementById(`node-${node.row}-${node.col}`)!.className =
          "node";
      });
    });
    setGrid(() => createInitialGrid());
    setCleared(true);
  };

  return (
    <>
      <button onClick={() => visualizeDijkstra(grid)}>
        Visualize Dijkstra's
      </button>
      <button onClick={() => {}}>DFS</button>
      <button onClick={() => {}}>BFS</button>
      <button onClick={() => visualizeAstar(grid)}>Astar</button>
      <button onClick={() => clearGrid()}>Clear Grid</button>
      <GridContainer>
        {grid.map((row, rowIdx) => {
          return (
            <Container key={rowIdx}>
              {row.map((node, nodeIdx) => {
                const { row, col, isFinish, isStart, isWall } = node;
                return (
                  <Node
                    key={nodeIdx}
                    col={col}
                    distance={0}
                    isFinish={isFinish}
                    isStart={isStart}
                    isWall={isWall}
                    onMouseDown={(row, col) => handleMouseDown(row, col)}
                    onMouseEnter={(row, col) => handleMouseEnter(row, col)}
                    onMouseUp={() => handleMouseUp()}
                    addNeighbors={() => {}}
                    row={row}
                    cleared={cleared}
                  />
                );
              })}
            </Container>
          );
        })}
      </GridContainer>
    </>
  );
};

export default Pathfinder;
