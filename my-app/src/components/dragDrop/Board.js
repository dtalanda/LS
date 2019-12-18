import React from 'react';

function Board(props) {

    const dragOver = e => {
        e.preventDefault();      
    }

    return (
        <div 
        id={props.id}
        className={props.className}
        onDrop={props.drop}
        onDragOver={dragOver}        
        >
            { props.children }
        </div>
    )

}

export default Board;