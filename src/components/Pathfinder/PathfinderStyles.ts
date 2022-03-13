import styled, { keyframes } from "styled-components";

const visitedAnimation = keyframes`
   0% {
    transform: scale(0.3);
    background-color: rgba(0, 0, 66, 0.75);
    border-radius: 100%;
  }

  50% {
    background-color: rgba(17, 104, 217, 0.75);
  }

  75% {
    transform: scale(1.2);
    background-color: rgba(0, 217, 159, 0.75);
  }

  100% {
    transform: scale(1);
    background-color: rgba(0, 190, 218, 0.75);
  }
`;

const shortestPathAnimation = keyframes`
 0% {
    transform: scale(0.6);
    background-color: rgb(255, 254, 106);
  }

  50% {
    transform: scale(1.2);
    background-color: rgb(255, 254, 106);
  }

  100% {
    transform: scale(1);
    background-color: rgb(255, 254, 106);
  }
`;

export const GridContainer = styled.div`
  margin: 100px 0 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;

  .node {
    width: 25px;
    height: 25px;
    outline: 1px solid rgb(175, 216, 248);
    display: inline-block;
  }

  .node-visited {
    animation-name: ${visitedAnimation};
    animation-duration: 1.5s;
    animation-timing-function: ease-out;
    animation-delay: 0;
    animation-direction: alternate;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    animation-play-state: running;
  }

  .node-shortest-path {
    animation-name: ${shortestPathAnimation};
    animation-duration: 1.5s;
    animation-timing-function: ease-out;
    animation-delay: 0;
    animation-direction: alternate;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    animation-play-state: running;
  }
`;
