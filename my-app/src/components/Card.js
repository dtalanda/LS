import React ,{ useState } from 'react';

function Card(props) {
    const [points, setPoints] = useState(0);

    const dragStart = e => {
        const target = e.target;

        e.dataTransfer.setData('card_id', target.id);

        setTimeout(() => {
            target.style.display = "none";
        }, 0);

    }

    const dragOver = e => {
        e.stopPropagation();
        e.target.style.display = "flex";

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