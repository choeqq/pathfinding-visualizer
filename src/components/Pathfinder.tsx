import React, { useState } from "react";
import { NodeTypes } from "../types/node.type";
import Node from "./Node";
import { createInitialGrid } from "../helpers/create-grid";

const Pathfinder: React.FC = () => {
  const [grid, setGrid] = useState<NodeTypes[][]>(() => createInitialGrid());
  const [mouseIsPressed, setMouseIsPressed] = useState<boolean>(false);

  const handleMouseDown = (row: number, col: number) => {};
  const handleMouseEnter = (row: number, col: number) => {};
  const handleMouseUp = () => {};

  return (
    <>
      <button>Visualize Dijkstra's</button>
      <div>
        {grid.map((row, rowIdx) => {
          return (
            <div key={rowIdx}>
              {row.map((node, nodeIdx) => {
                const { row, col, isFinish, isStart, isWall } = node;
                return (
                  <Node
                    key={nodeIdx}
                    row={row}
                    col={col}
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
      </div>
    </>
  );
};

export default Pathfinder;
