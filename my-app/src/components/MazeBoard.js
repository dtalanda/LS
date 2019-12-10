import React from 'react';
import MazeCard from './MazeCard';

const BlockBoard = props => {

    const sentence = props.sentence;
    const img = props.img;
    const onClick = props.onClick;

    return (
        <div className='block'>
            {sentence.map((item, index) => (
                <>
                {index < 1 && (
                    <h2 className='block__title' key={item.key}>{item.sentence}</h2>
                )}
                </>
            ))}
            <MazeCard img={img} onClick={onClick} />
        </div>
    )
}

export default BlockBoard;