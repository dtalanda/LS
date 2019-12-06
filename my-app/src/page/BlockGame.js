import React, { useState, useEffect } from 'react';
// import '../style/blockGame.scss';

const BlockGame = () => {

    const [sentence, setSentence] = useState([]);
    const [img, setImg] = useState([]);

    useEffect(() => {
        setSentence([
            {sentence: "I've got blocks", key: 1},
            {sentence: "I've got a train", key: 2},
            {sentence: "It's a pencil", key: 3},
            {sentence: "It's my leg", key: 4}
        ])
        setImg([
            {img: 'TRAIN', key: 2},
            {img: 'PENCIL', key: 3},
            {img: 'BLOCK', key: 1},
            {img: 'LEG', key: 4},
        ])
    })
    return (
        <>
        {sentence.map((item, index) => (
            <>
            {index < 1 && (
                <h2 key={item.key}>{item.sentence}</h2>
            )}
            </>
            
        ))}
        {img.map(item => (
            <p key={item.key}>{item.img}</p>
        ))}
        </>

    )
}

export default BlockGame;