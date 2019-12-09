import React from 'react';
import '../style/dragNdrop.scss'

const BlockCard = props => {

    const img = props.img;
    const onClick = props.onClick
;
    return (
        <>
            <ul className='block__list'>
                {img.map(item => (
                    <li className='block__card' key={item.key}  onClick={e => onClick(e)}><img src={item.img} id={item.key}></img></li>
                ))}
            </ul> 
        </>
    )
}

export default BlockCard;