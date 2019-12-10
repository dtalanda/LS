import React from 'react';

function Board(props) {

    let correctSound = new Audio("../sounds/correct.mp3");
    let wrongSound = new Audio("../sounds/wrong.mp3");

    const drop = e => {
        e.preventDefault();
        const card_id = e.dataTransfer.getData('card_id');

        const card = document.getElementById(card_id);
        card.style.display = 'flex';
        

        if(card.classList.contains(e.target.id)) {
            e.target.appendChild(card);
            correctSound.play();
        } else {
            wrongSound.play();  
        }
    }

    const dragOver = e => {
        e.preventDefault();      
    }

    return (
        <div 
        id={props.id}
        className={props.className}
        onDrop={drop}
        onDragOver={dragOver}        
        >
            { props.children }
        </div>
    )

}

export default Board;