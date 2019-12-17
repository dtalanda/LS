import React ,{ useState } from 'react';

function Card(props) {

    const dragStart = e => {
       const target = e.target;

        e.dataTransfer.setData('card_id', target.id);

        setTimeout(() => {
            target.style.display = "none";
            setTimeout(() => {
                target.style.display = "flex";
            }, 1000)
        }, 0);
    }

    const dragOver = e => {
        e.target.style.display = "flex"; 
        e.stopPropagation();
    }

    return (
        <div
        id={props.id}
        className={props.className}
        draggable={props.draggable}
        onDragStart={dragStart}
        onDragOver={dragOver}
        >
            {props.children}
        </div>
    )
}

export default Card;