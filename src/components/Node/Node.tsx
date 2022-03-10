import React from "react";
import { StyledNode } from "./NodeStyles";
import { NodeTypes } from "../../types/node.type";

const Node: React.FC<NodeTypes> = ({
  col,
  row,
  isFinish,
  isStart,
  isWall,
  onMouseDown,
  onMouseEnter,
  onMouseUp,
}) => {
  return (
    <StyledNode
      id={`node-${row}-${col}`}
      row={row}
      col={col}
      onMouseDown={() => onMouseDown(row, col)}
      onMouseEnter={() => onMouseEnter(row, col)}
      onMouseUp={() => onMouseUp()}
      isFinish={isFinish}
      isStart={isStart}
      isWall={isWall}
    />
  );
};

export default Node;