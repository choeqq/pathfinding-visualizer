import React, {useState} from "react";
import { NodeUITypes } from "../types/node.type";
import  Node from './Node';
import { createInitialGrid } from "../helpers/create-grid";

const Pathfinder = () => {
    const [grid, setGrid] = useState<NodeUITypes[][]>(() => createInitialGrid());
    const [mouseIsPressed, setMouseIsPressed] = useState<boolean>(false);

    const handleMouseDown = (row:number, col: number) => {};
    const handleMouseEnter = (row:number, col: number) => {};
    const handleMouseUp = () => {};

    return (<>
    <button>Visualize Dijkstra's</button>
    <div>
        {grid.map((row,rowIdx) => {
            return (
                <div key={rowIdx}>
                    {row.map((node, nodeIdx) => {
                        const {row,col,isFinish,isStart,isWall} = node;
                        return (
                            <Node 
                                key={nodeIdx}
                                row={row}
                                col={col}
                                isFinish={isFinish}
                                isStart={isStart}
                                isWall={isWall}
                                onMouseDown={(row,col) => handleMouseDown(row,col)}
                                onMouseEnter={(row,col) => handleMouseEnter(row,col)}
                                onMouseUp={() => handleMouseUp()}
                            />
                        )
                    }})
                </div>
            )
        })}
    </div>
  </>);
};

export default Pathfinder;
