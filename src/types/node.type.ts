export interface NodeTypes {
  col: number;
  row: number;
  isStart: boolean;
  isFinish: boolean;
  distance: number;
  isVisited: boolean;
  isWall: false;
  previousNode: Node | null;
}

interface CommonTypes {
  isStart: boolean;
  isFinish: boolean;
  isWall: boolean;
  onMouseDown: (_1: number, _2: number) => void;
  onMouseEnter: (_1: number, _2: number) => void;
  onMouseUp: () => void;
}

export interface NodeUITypes extends CommonTypes {
  col: number;
  row: number;
}

export interface StyledNodeTypes extends CommonTypes {
  id: string;
}
