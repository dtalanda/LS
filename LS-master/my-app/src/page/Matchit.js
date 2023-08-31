import React, { useState  } from 'react';
import MatchItTitle from '../components/matchIt/MatchItTitle';
import MatchItArea from '../components/matchIt/MatchItArea';
import dool from '../icon/dool.png';
import ship from '../icon/ship.png';
import ear from '../icon/ear.png';
import hand from '../icon/hand.png';
import igloo from '../icon/igloo.png';
import snowflake from '../icon/snowflake.png';
import watermelon from '../icon/watermelon.png';
import strawberry from '../icon/strawberry.png';

const MatchIt = props => {

    const [arr, setArr] = useState([
        {img: dool, key: 1},
        {img: hand, key: 4},
        {img: igloo, key: 2},
        {img: watermelon, key: 3},
    ]);
    const [target, setTarget] = useState([
        {img: snowflake, key: 2},
        {img: ship, key: 1},
        {img: ear, key: 4},
        {img: strawberry, key: 3},
    ]);
    const [sentence, setSentence] = useState([
        {sentence: 'Dool to ship'},
        {sentence: 'Hand to ear'},
        {sentence: 'Igloo to snowflake'},
        {sentence: 'Watermelon to strawbery'},
    ]);
    const [points, setPoints] = useState(1);
    let correctSound = new Audio("../sounds/correct.mp3");
    let wrongSound = new Audio("../sounds/wrong.mp3");


    const backToMain = () => {
        setTimeout(() => {
          alert('gratulacje')
          setTimeout(() => {
              const path = '/'
              props.history.push(path)
          }, 500)                
        }, 500)
      }

      const addClass = (e, item) => {
            e.appendChild(item);
            const child = e.querySelector('img');
            child.classList.add('matchit__item--correct');
            child.classList.remove('matchit__img');
      }

      const filterArr = (array) => {
        const newArr = array.filter((item, index) => index !== 0)
        setSentence(newArr);
      }

      const drop = e => {
        e.preventDefault();

        const card_id = e.dataTransfer.getData('card_id');
        const card = document.getElementById(card_id);

        card.style.display = 'flex';
    
        if(card.id === e.target.id) {
            setPoints(points + 1)
            addClass(e.target, card)
            filterArr(sentence);
            correctSound.play();

            if( points === arr.length ) {
              backToMain();
            }
            
        } else {
            wrongSound.play();  
        }
    }



    return (
        <>
            <MatchItTitle sentence={sentence} />
            <MatchItArea arr={arr} target={target} drop={drop} />
        </>
    )
}

export default MatchIt;