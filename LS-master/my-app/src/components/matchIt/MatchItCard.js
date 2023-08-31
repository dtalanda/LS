import React from 'react';
import Card from '../dragDrop/Card';

const MatchItCard = ({arr}) => {

    return (
        <>
        {arr.map(item => (
                <Card className='matchit__item' draggable={true} id={item.key}>
                    <img src={item.img} alt={item.img} className='matchit__img'></img>
                </Card>
            ))}
            </>
    )
}

export default MatchItCard;