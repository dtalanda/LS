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
                    <li className='block__card' id={item.key} onClick={e => onClick(e)}>{item.img}</li>
                ))}
            </ul> 
        </>
    )
}

export default BlockCard;