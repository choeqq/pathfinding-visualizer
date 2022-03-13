import React, { useState } from "react";
import { NodeTypes } from "../../types/node.type";
import Node from "../Node/Node";
import { createInitialGrid } from "../../helpers/create-grid";
import { toggleWalls } from "../../helpers/toggle-walls";
import { Container, GridContainer } from "./PathfinderStyles";
import visualizeDijkstra from "../../helpers/visualize-dijkstra";

const Pathfinder: React.FC = () => {
  const [grid, setGrid] = useState<NodeTypes[][]>(() => createInitialGrid());
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
    setGrid(() => createInitialGrid());
  };

  return (
    <>
      <button onClick={() => visualizeDijkstra(grid)}>
        Visualize Dijkstra's
      </button>
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
                    isFinish={isFinish}
                    isStart={isStart}
                    isWall={isWall}
                    onMouseDown={(row, col) => handleMouseDown(row, col)}
                    onMouseEnter={(row, col) => handleMouseEnter(row, col)}
                    onMouseUp={() => handleMouseUp()}
                    row={row}
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
