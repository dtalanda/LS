import React from 'react';

const CloudTitle = ({sentence}) => {

    return (
        <>
        {sentence.map((item, index) => (
            <>
            {index < 1 && (
                <h2 className='block__title' key={item.key}>{item.sentence}</h2>
            )}
            </>
        ))}
        </>
    )
}

export default CloudTitle;