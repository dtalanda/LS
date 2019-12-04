import React, { useState, useEffect } from 'react';
import uid from 'uniqid';
import Card from './components/Card';
import Board from './components/Board';
import bridge from './bridge.png'

const App = () => {

  const [sentence, setSentencs] = useState([]);
  const [answer, setAnswer] = useState([]);

  useEffect(() => {
    setSentencs(
      [
        {name: "bridge.", className: "jsOne", id: uid()},
        {name: "is", className: "jsTwo", id: uid()},
        {name: "It", className: "jsThree", id: uid()},
        {name: "a", className: "jsFour", id: uid()},
      ]
    )
    setAnswer([
      {name: "It", className: "jsThree"},
      {name: "is", className: "jsTwo"},
      {name: "a", className: "jsFour"},
      {name: "bridge.", className: "jsOne"}
    ])
  }, [])


  return (
    <>
    <img className='img' src={bridge}></img>
    <Board className='flexbox'>
      <div className='flex'>
      {answer.map(item => (
        <Board id={item.className} className='board'/>
      ))}
      </div>
      <Board id="board-1" className='board board__word'>
        {sentence.map((item) => (
          <Card 
            id={item.id} 
            className={`card ${item.className}`} 
            draggable='true'>{item.name} 
          </Card>
        ))}
        </Board>
    </Board>
    </>    
  );
}

export default App;
