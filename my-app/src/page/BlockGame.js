import React, { useState, useEffect } from 'react';
import BlockBoard from '../components/BlockBoard';
import '../style/blockGame.scss';

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
        <BlockBoard sentence={sentence} img={img} />
    )
}

export default BlockGame;