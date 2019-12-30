import React, { useState } from 'react';
import leg from '../icon/leg.png';
import block from '../icon/block.png';
import train from '../icon/train.png';
import pencil from '../icon/pencil.png';
import window from '../icon/window.png';
import Title from '../components/oneOrTwo/Title';
import Board from '../components/oneOrTwo/Board';


const OneOrTwo = props => {

    const [sentence, setSentence] = useState([
        {sentence: "I've got blocks.", key: 1},
        // {sentence: "I've got a train.", key: 2},
        {sentence: "It's a pencil.", key: 3},
        // {sentence: "It's my leg.", key: 4},
        {sentence: "It's a window.", key: 5},
    ]);
        

    const [arr, setArr] = useState([
        {img: block, key: 1 },
        {img: leg, key: 4},
        {img: pencil, key: 3},
        {img: train, key: 2},
        {img: block, key: 6 },
        {img: window, key: 5},
    ]);

    const backToMain = () => {
        setTimeout(() => {
          alert('gratulacje')
          setTimeout(() => {
              const path = '/'
              props.history.push(path)
          }, 500)                
      }, 500)
      }

    const onClick = (item) => {
        if(sentence[0].key === item.key) {
            const newSentence = sentence.filter((item, index) => index !== 0);
            setSentence(newSentence);

            const newArr = arr.filter((item, index) => index >= 2);
            setArr(newArr);
            if(sentence.length === 1) {
                backToMain()
            }
        }
    }


    return (
        <>
            <Title sentence={sentence} />
            <Board onClick={onClick} arr={arr} />
        </>
    )
}

export default OneOrTwo;