import React, { useState } from 'react';
import leg from '../icon/leg.png';
import block from '../icon/block.png';
import train from '../icon/train.png';
import pencil from '../icon/pencil.png';
import window from '../icon/window.png';
import Title from '../components/oneOrTwo/Title';
import Board from '../components/oneOrTwo/Board';


const OneOrTwo = () => {

    const [sentence, setSentence] = useState([
        {sentence: "I've got blocks.", key: 1},
        {sentence: "I've got a train.", key: 2},
        {sentence: "It's a pencil.", key: 3},
        {sentence: "It's my leg.", key: 4},
        {sentence: "It's a window.", key: 5},
    ]);
        

    const [arr, setArr] = useState([
        {img: block, key: 1 },
        {img: train, key: 2},
        {img: pencil, key: 3},
        {img: leg, key: 4},
        {img: window, key: 5},
    ]);


    return (
        <>
            <Title sentence={sentence} />
            <Board arr={arr} />
        </>
    )
}

export default OneOrTwo;