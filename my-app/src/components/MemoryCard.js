import React from 'react';

const MemoryCard = props => {
    const arr = props.arr;
    const onClick = props.onClick;
    return (
        <>
        {arr.map(item => (
            <>
            {item.source.includes("png") 
            ?
            <span className={`memory__card ${item.key}`} onClick={e => onClick(e, item)} >
                <img src={item.source} className='memory__card--img'></img>
            </span>
            :
            <p className={`memory__card ${item.key}`} onClick={e => onClick(e, item)}>{item.source}</p>
            }
            </>
        ))}
        </>

    );
}

export default MemoryCard;


