import React from 'react';

const BlockCard = props => {

    const img = props.img;

    return (
        <>
            <ul className='block__list'>
            {img.map(item => (
                <li className='block__card' key={item.key}>{item.img}</li>
            ))}
            </ul> 
        </>
    )
}

export default BlockCard;