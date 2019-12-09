import React from 'react';
import BlockCard from './MazeCard';

const BlockBoard = props => {

    const sentence = props.sentence;
    const img = props.img;
    const onClick = props.onClick;

    console.log(img)

    return (
        <div className='block'>
            {sentence.map((item, index) => (
                <>
                {index < 1 && (
                    <h2 className='block__title' key={item.key}>{item.sentence}</h2>
                )}
                </>
            ))}
            <BlockCard img={img} onClick={onClick} />
        </div>
    )
}

export default BlockBoard;