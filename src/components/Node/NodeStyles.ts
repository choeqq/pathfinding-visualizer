import styled from "styled-components";
import { NodeTypes } from "../../types/node.type";

export const StyledNode = styled.div<NodeTypes>`
  width: 25px;
  height: 25px;
  outline: 1px solid rgb(175, 216, 248);
  display: inline-block;
  background-color: ${({ isFinish, isStart, isWall }) =>
    isFinish ? "red" : isStart ? "green" : isWall ? "rgb(12, 53, 71)" : ""};
`;
