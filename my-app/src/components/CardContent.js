import React from 'react';
import Card from './Card';
import Board from './Board';


 const CardContent = props => {
     const sentence = props.sentence;

    return (
        <Board id="board-1" className='board board__word'>
        {sentence.map((item) => (
          <Card 
            id={item.id} 
            className={`card ${item.className}`} 
            draggable='true'>{item.name} 
          </Card>
        ))}
        </Board>
    )
 }

 export default CardContent;