import React from 'react';
import MemoryCard from './MemoryCard'

const MemoryBoard = props => {

    const arr = props.arr;
    const onClick = props.onClick;
    return (
        <div className='memory'>
            <MemoryCard arr={arr} onClick={onClick} />
        </div>

    )
}

export default MemoryBoard;