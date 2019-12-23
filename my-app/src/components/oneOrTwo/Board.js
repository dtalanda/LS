import React from 'react';

const Board = props => {

    const arr = props.arr;

    return (
        <div className='board'>
            {arr.map((item, index) => (
                <>
                    {index < 2 && (
                        <img /*onClick={() => onClick()}*/ className='board__img' src={item.img} alt={item.img} />
                    )}
                </>
                ))}
        </div>
    )
}

export default Board;