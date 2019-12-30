import React from 'react';

const CloudBoard = props => {

    const img = props.img;
;
    return (
        <>
            <ul className='block__list'>
                {img.map(item => (
                    <li className='block__card' key={item.key}><img src={item.img} id={item.key} alt={item.img}></img></li>
                ))}
            </ul> 
        </>
    )
}

export default CloudBoard;