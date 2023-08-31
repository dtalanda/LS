import React from 'react';

const BingoTitle = props => {

    const sentence = props.sentence;

    return (
        <>
        {sentence.map((item, index) => (
            <>
                {index < 1 && (
                    <h2 className='bingo__title' key={item.key}>{item.sentence}</h2>   
                )}
            </>
            ))}
        </>
    )
}

export default BingoTitle;