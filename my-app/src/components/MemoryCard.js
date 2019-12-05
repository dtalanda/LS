import React from 'react';

const MemoryCard = props => {
    const arr = props.arr;
    const onClick = props.onClick;
    return (
        <>
        {arr.map(item => (
            <p className={`memory__card ${item.key}`} onClick={e => onClick(e, item)}>{item.title}</p>
        ))}
        {arr.map(item => (
            <p className={`memory__card ${item.key}`} onClick={e => onClick(e, item)}>{item.title}</p>
        ))}
        </>

    );
}

export default MemoryCard;