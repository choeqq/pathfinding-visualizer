export interface Node {
  col: number;
  row: number;
  isStart: boolean;
  isFinish: boolean;
  distance: number;
  isVisited: boolean;
  isWall: false;
  previousNode: Node | null;
}
