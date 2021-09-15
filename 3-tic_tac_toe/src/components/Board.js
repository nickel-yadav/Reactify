import React, { useState } from 'react';
import Square from './Square';

const Board = () => {
    
    const [move, setMove] = useState([]);


      return (
        <div>
            <div className="board-row">
                <Square />
                <Square />
                <Square />
            </div>
            <div className="board-row">
                <Square />
                <Square />
                <Square />
            </div>            
            <div className="board-row">
                <Square />
                <Square />
                <Square />
            </div>
        </div>
        
    );
}

export default Board;