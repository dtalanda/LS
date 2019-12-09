import React, { useState, useEffect } from 'react';
import BlockBoard from '../components/BlockBoard';
import '../style/blockGame.scss';
import leg from '../icon/leg.png';
import block from '../icon/block.png';
import train from '../icon/train.png';
import pencil from '../icon/pencil.png';

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
            {img: train, key: 2},
            {img: pencil, key: 3},
            {img: block, key: 1},
            {img: leg, key: 4},
        ])
    }, [])

    const onClick = e => {
        if (sentence[0].key === parseInt(e.target.id)) {
            e.target.classList.add('block__card--correct');
            if(sentence.length > 1) {
                const newArr = sentence.filter((item, index) => index !== 0)
                setSentence(newArr);
            }
        } else {
            const wrong = e.target;
            e.target.classList.add('block__card--wrong');
            setTimeout(() => {
                wrong.classList.remove('block__card--wrong')
            }, 200)
        }
    }


    return (
        <BlockBoard sentence={sentence} img={img} onClick={onClick} />
    )
}

export default BlockGame;