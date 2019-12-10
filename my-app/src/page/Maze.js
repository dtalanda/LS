import React, { useState, useEffect } from 'react';
import MazeBoard from '../components/MazeBoard';
import '../style/maze.scss';
import leg from '../icon/leg.png';
import block from '../icon/block.png';
import train from '../icon/train.png';
import pencil from '../icon/pencil.png';
import table from '../icon/table.png';
import book from '../icon/book.png';
import dool from '../icon/dool.png';
import ear from '../icon/ear.png';
import car from '../icon/car.png';
import ship from '../icon/ship.png';
import floor from '../icon/floor.png';
import mouth from '../icon/mouth.png';
import robot from '../icon/robot.png';
import hand from '../icon/hand.png';
import legs from '../icon/legs.png';
import window from '../icon/window.png';
import Square from '../icon/square.png';

const BlockGame = () => {

    const [sentence, setSentence] = useState([]);
    const [img, setImg] = useState([]);

    let correctSound = new Audio("../sounds/correct.mp3");
    let wrongSound = new Audio("../sounds/wrong.mp3");

    useEffect(() => {
        setSentence([
            {sentence: "I've got blocks.", key: 1},
            {sentence: "I've got a train.", key: 2},
            {sentence: "It's a pencil.", key: 3},
            {sentence: "It's my leg.", key: 4},
            {sentence: "t's a window.", key: 5},
            {sentence: "They're my legs.", key: 6}, 
            {sentence: "Ther're my ears.", key: 7},
            {sentence: "I've got car.", key: 8},
            {sentence: "It's a table.", key: 9},
            {sentence: "It's a book.", key: 10},
            {sentence: "I've got a dool", key: 11},
            {sentence: "I've got a ship.", key: 12},
            {sentence: "It's a floor", key: 13},
            {sentence: "It's my mouth", key: 14},
            {sentence: "I've got a robot.", key: 15},
            {sentence: "It's my hand.", key: 16},
        ])
        setImg([
            {img: Square},
            {img: Square},
            {img: Square},
            {img: table, key: 9},
            {img: book, key: 10},
            {img: dool, key: 11},
            {img: Square},
            {img: Square},
            {img: Square},
            {img: Square},

            {img: block, key: 1},
            {img: Square},
            {img: ear, key: 7},
            {img: car, key: 8},
            {img: Square},
            {img: ship, key: 12},
            {img: floor, key: 13},
            {img: mouth, key: 14},
            {img: robot, key: 15},
            {img: hand, key: 16},

            {img: train, key: 2},
            {img: Square},
            {img: legs, key: 6},
            {img: Square},
            {img: Square},
            {img: Square},
            {img: Square},
            {img: Square},
            {img: Square},
            {img: Square},

            {img: pencil, key: 3},
            {img: leg, key: 4},
            {img: window, key: 5},
            {img: Square},
            {img: Square},,
            {img: Square},
            {img: Square},
            {img: Square},
            {img: Square},
            {img: Square},            
        ])
    }, [])

    const onClick = e => {
        if (sentence[0].key === parseInt(e.target.id)) {
            e.target.classList.add('block__card--correct');
            correctSound.play();
            if(sentence.length > 1) {
                const newArr = sentence.filter((item, index) => index !== 0)
                setSentence(newArr);
            }
        } else {
            const wrong = e.target;
            wrong.classList.add('block__card--wrong');
            wrongSound.play();
            setTimeout(() => {
                wrong.classList.remove('block__card--wrong')
            }, 200)
        }
    }


    return (
        <MazeBoard sentence={sentence} img={img} onClick={onClick} />
    )
}

export default BlockGame;