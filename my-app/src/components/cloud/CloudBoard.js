import React from 'react';

const CloudBoard = props => {

    const img = props.img;
    const onClick = props.onClick;
;
    return (
        <>
            <ul className='cloud__list'>
                {img.map(item => (
                    <li  onClick={(e) => onClick(item, e)} key={item.key}><img src={item.img} className='cloud__card' id={item.key} alt={item.img}></img></li>
                ))}
            </ul> 
        </>
    )
}

export default CloudBoard;