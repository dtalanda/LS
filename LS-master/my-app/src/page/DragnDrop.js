import React, { useState, useEffect } from 'react';
import uid from 'uniqid';
import CardContent from '../components/dragDrop/CardContent';
import Board from '../components/dragDrop/Board';
import BoardContent from '../components/dragDrop/BoardContent';
import bridge from '../bridge.png';

const DragnDrop = props => {

  const [sentence, setSentencs] = useState([]);
  const [question, setQuestion] = useState([]);
  let correctSound = new Audio("../sounds/correct.mp3");
  let wrongSound = new Audio("../sounds/wrong.mp3");
  const [points, setPoints] = useState(1)

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

  const backToMain = () => {
    setTimeout(() => {
      alert('gratulacje')
      setTimeout(() => {
          const path = '/'
          props.history.push(path)
      }, 500)                
  }, 500)
  }
  const drop = e => {
    e.preventDefault();
    const card_id = e.dataTransfer.getData('card_id');

    const card = document.getElementById(card_id);
    card.style.display = 'flex';
    

    if(card.classList.contains(e.target.id)) {
        setPoints(points + 1)
        e.target.appendChild(card);
        correctSound.play();
        if( points === sentence.length ) {
          setTimeout(() => {
            alert('gratulacje')
            setTimeout(() => {
                const path = '/'
                props.history.push(path)
            }, 500)                
        }, 500)
        }
        
    } else {
        wrongSound.play();  
    }
}


  return (
    <>
    <img className='img' src={bridge} alt={bridge}></img>
    <Board className='flexbox'>
      <BoardContent question={question} drop={drop} history={props.history} sentence={sentence} backToMain={backToMain} />      
      <CardContent sentence={sentence} />
    </Board>
    </>    
  );
}

export default DragnDrop;
