export interface NodeTypes {
  col: number;
  row: number;
  isStart?: boolean;
  isFinish?: boolean;
  isWall?: boolean;
  distance: number;
  isVisited?: boolean;
  previousNode?: NodeTypes | null;
  onMouseDown: (_1: number, _2: number) => void;
  onMouseEnter: (_1: number, _2: number) => void;
  onMouseUp: () => void;
  id?: string;
  cleared?: boolean;
  g?: number;
  f?: number;
  h?: number;
  neighbors?: NodeTypes[];
  previous?: NodeTypes;
  addNeighbors: (_1: NodeTypes[][]) => void;
}
