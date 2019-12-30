import React from 'react';

const Board = props => {

    const arr = props.arr;
    const onClick = props.onClick;
    
    return (
        <div className='board'>
            {arr.map((item, index) => (
                <>
                    {index < 2 && (
                        <img onClick={(e) => onClick(item)} className='board__img' src={item.img} alt={item.img} />
                    )}
                </>
                ))}
        </div>
    )
}

export default Board;