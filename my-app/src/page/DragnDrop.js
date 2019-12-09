import React, { useState, useEffect } from 'react';
import uid from 'uniqid';
import CardContent from '../components/CardContent';
import Board from '../components/Board';
import BoardContent from '../components/BoardContent';
import bridge from '../bridge.png'

const DragnDrop = () => {

  const [sentence, setSentencs] = useState([]);
  const [question, setQuestion] = useState([]);

  useEffect(() => {
    setSentencs(
      [
        {name: "bridge.", className: "jsOne", id: uid()},
        {name: "is", className: "jsTwo", id: uid()},
        {name: "It", className: "jsThree", id: uid()},
        {name: "a", className: "jsFour", id: uid()},
      ]
    )
    setQuestion([
      {name: "It", className: "jsThree"},
      {name: "is", className: "jsTwo"},
      {name: "a", className: "jsFour"},
      {name: "bridge.", className: "jsOne"}
    ])
  }, [])


  return (
    <>
    <img className='img' src={bridge} alt={bridge}></img>
    <Board className='flexbox'>
      <BoardContent question={question} />      
      <CardContent sentence={sentence} />
    </Board>
    </>    
  );
}

export default DragnDrop;
