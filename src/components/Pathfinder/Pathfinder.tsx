import React, { useState } from "react";
import { NodeTypes } from "../../types/node.type";
import Node from "../Node/Node";
import { createInitialGrid } from "../../helpers/create-grid";
import { toggleWalls } from "../../helpers/toggle-walls";
import { GridContainer } from "./PathfinderStyles";

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

  return (
    <>
      <button>Visualize Dijkstra's</button>
      <GridContainer>
        {grid.map((row, rowIdx) => {
          return (
            <div key={rowIdx}>
              {row.map((node, nodeIdx) => {
                const { col, row, isFinish, isStart, isWall } = node;
                return (
                  <Node
                    key={nodeIdx}
                    col={col}
                    row={row}
                    isFinish={isFinish}
                    isStart={isStart}
                    isWall={isWall}
                    onMouseDown={(row: number, col: number) =>
                      handleMouseDown(row, col)
                    }
                    onMouseEnter={(row: number, col: number) =>
                      handleMouseEnter(row, col)
                    }
                    onMouseUp={() => handleMouseUp()}
                  />
                );
              })}
            </div>
          );
        })}
      </GridContainer>
    </>
  );
};

export default Pathfinder;
