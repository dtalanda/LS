import React from 'react';

const MazeCard = props => {

    const img = props.img;
    const onClick = props.onClick
;
    return (
        <>
            <ul className='block__list'>
                {img.map(item => (
                    <li className='block__card' key={item.key}  onClick={e => onClick(e)}><img src={item.img} id={item.key} alt={item.img}></img></li>
                ))}
            </ul> 
        </>
    )
}

export default MazeCard;