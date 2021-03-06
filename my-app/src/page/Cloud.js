import React, { useState, useEffect } from 'react';
import CloudTitle from '../components/cloud/CloudTitle';
import CloudBoard from '../components/cloud/CloudBoard';
import block from '../icon/block.png';
import train from '../icon/train.png';
import pencil from '../icon/pencil.png';
import leg from '../icon/leg.png';
import window from '../icon/window.png';


const Cloud = props => {

    const [sentence, setSentence] = useState([
        {sentence: "I've got blocks.", key: 1},
        {sentence: "I've got a train.", key: 2},
        {sentence: "It's a pencil.", key: 3},
        {sentence: "It's my leg.", key: 4},
        {sentence: "t's a window.", key: 5},
    ])

    const [img, setImg] = useState([
        {img: block, key: 1},
        {img: train, key: 2},
        {img: pencil, key: 3},
        {img: leg, key: 4},
        {img: window, key: 5},
    ])

    const backToMain = () => {
        setTimeout(() => {
          alert('gratulacje')
          setTimeout(() => {
              const path = '/'
              props.history.push(path)
          }, 500)                
      }, 500)
      }

    const onClick = (item, e) => {
        if(sentence[0].key === item.key) {
            const newSentence = sentence.filter((item, index) => index !== 0);
            setSentence(newSentence);

            e.target.classList.add('cloud__card--correct');

            if(sentence.length === 1) {
                backToMain()
            }

        }
    }

    return (
        <>
        <CloudTitle sentence={sentence} />
        <CloudBoard onClick={onClick} img={img} />
        </>

    )
}

export default Cloud;