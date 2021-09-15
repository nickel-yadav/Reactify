import React from 'react'; 
import Board from './Board'; 

const Game = () => {

    const status = 'New Player'; 
    return (
        <div className="game">
            <div className="title">{status}</div>  
            <div className="moves">
              <div className="move">X</div>
              <div className="move">O</div>
            </div>      
            <div className="board"> 
                <Board />
            </div>
            <div className="result">
                {/* {winner} */}
            </div>
        </div> 
    );
}

export default Game; 