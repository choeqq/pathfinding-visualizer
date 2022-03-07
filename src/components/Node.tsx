import React from "react";
import { StyledNode } from "../styles/Node";
import { NodeUITypes } from "../types/node.type";

const Node: React.FC<NodeUITypes> = ({
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
