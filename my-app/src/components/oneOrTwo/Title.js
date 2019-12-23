import React from 'react';

const Title = props => {

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

export default Title;