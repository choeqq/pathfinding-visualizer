export interface NodeTypes {
  col: number;
  row: number;
  isStart?: boolean;
  isFinish?: boolean;
  isWall?: boolean;
  distance?: number;
  isVisited?: boolean;
  previousNode?: Node | null;
  onMouseDown?: (_1: number, _2: number) => void;
  onMouseEnter?: (_1: number, _2: number) => void;
  onMouseUp?: () => void;
  id?: string;
}
