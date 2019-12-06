import React from 'react';
import BlockCard from './BlockCard';

const BlockBoard = props => {

    const sentence = props.sentence;
    const img = props.img;

    return (
        <div className='block'>
            {sentence.map((item, index) => (
                <>
                {index < 1 && (
                    <h2 className='block__title' key={item.key}>{item.sentence}</h2>
                )}
                </>
            ))}
            <BlockCard img={img} />
        </div>
    )
}

export default BlockBoard;