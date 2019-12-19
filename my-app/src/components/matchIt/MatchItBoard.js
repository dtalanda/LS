import React from 'react';
import Board from '../dragDrop/Board';


const MatchItBoard = ({drop, target}) => {

    return (
        <>
            {target.map(item => (
                    <Board id={item.key} className='matchit__item matchit__item--position' drop={drop}>
                        <img src={item.img} alt={item.img} className='matchit__img'></img>
                    </Board>
                ))}
        </>
    )
}

export default MatchItBoard;