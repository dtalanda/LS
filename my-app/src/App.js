import React from 'react';
import Card from './components/Card';
import Board from './components/Board';

function App() {
  return (
    <div className='flexbox'>
      <Board id="board-1" className="board">
        <Card id="card-1" className="card board-3" draggable="true">
          <p>Card one</p>
        </Card>
      </Board>
      <Board id="board-2" className="board">
        <Card id="card-2" className="card board-3" draggable="true">
          <p>Card two</p>
        </Card>
      </Board>
      <Board id="board-3" className="board" />
      

    </div>
    
  );
}

export default App;
