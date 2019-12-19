import React, { useState, useEffect } from 'react'
import BingoTitle from '../components/bingo/BingoTitle';
import BingoBoard from '../components/bingo/BingoBoard';
import '../style/bingo.scss';
import leg from '../icon/leg.png';
import block from '../icon/block.png';
import train from '../icon/train.png';
import pencil from '../icon/pencil.png';
import ear from '../icon/ear.png';
import car from '../icon/car.png';
import legs from '../icon/legs.png';
import window from '../icon/window.png';
import table from '../icon/table.png';


const Bingo = props => {

    const [arr, setArr] = useState([
        {img: block, key: 1, bingo: false},
        {img: leg, key: 4, bingo: false},
        {img: car, key: 8, bingo: false},
        {img: pencil, key: 3, bingo: false},
        {img: table, key: 9, bingo: false},
        {img: legs, key: 6, bingo: false},
        {img: window, key: 5, bingo: false},
        {img: train, key: 2, bingo: false},
        {img: ear, key: 7, bingo: false},
    ]);
    const [sentence, setSentence] = useState([
        {sentence: "It's a pencil.", key: 3},
        {sentence: "Ther're my ears.", key: 7},
        {sentence: "I've got a train.", key: 2},
        {sentence: "It's a window.", key: 5},
        {sentence: "It's a table.", key: 9},
        {sentence: "It's my leg.", key: 4},
        {sentence: "They're my legs.", key: 6}, 
        {sentence: "I've got blocks.", key: 1},
        {sentence: "I've got car.", key: 8},
    ]);

    let correctSound = new Audio("../sounds/correct.mp3");
    let wrongSound = new Audio("../sounds/wrong.mp3");

    useEffect(() => {
        randomBingo()
    }, [])

    const randomBingo = () => {
        let randomIndex = getRandomInt(0, 9);
        arr[randomIndex].bingo = true
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }

    const filterSentence = () => {
        const newArr = sentence.filter((el, index) => index !== 0 )
        setSentence(newArr);
    }

    const returnToMain = () => {
        alert('BINGO');
        const path ='/';
        props.history.push(path);
    }   

    const checkBingo = (item, e) => {
        if(sentence[0].key === item.key) {
            filterSentence();
            e.target.style.opacity = 0.3;
            correctSound.play();
            if(item.bingo === true) {
                returnToMain();
            }
        } else {
            wrongSound.play();
        }
    }
    
    return (
        <div className='bingo'>
            <BingoTitle sentence={sentence} />
            <BingoBoard arr={arr} checkBingo={checkBingo} />
        </div>
    )
}

export default Bingo;