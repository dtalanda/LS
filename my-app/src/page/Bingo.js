import React, { useState } from 'react'
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


const Bingo = () => {

    const [arr, setArr] = useState([
        {img: block, key: 1},
        {img: train, key: 2},
        {img: pencil, key: 3},
        {img: leg, key: 4},
        {img: window, key: 5},
        {img: legs, key: 6},
        {img: ear, key: 7},
        {img: car, key: 8},
        {img: table, key: 9},

    ])
    const [sentence, setSentence] = useState([
        {sentence: "I've got blocks.", key: 1},
        {sentence: "I've got a train.", key: 2},
        {sentence: "It's a pencil.", key: 3},
        {sentence: "It's my leg.", key: 4},
        {sentence: "t's a window.", key: 5},
        {sentence: "They're my legs.", key: 6}, 
        {sentence: "Ther're my ears.", key: 7},
        {sentence: "I've got car.", key: 8},
        {sentence: "It's a table.", key: 9},
    ])

    const randomIndex = Math.floor(Math.random() * 10);
    console.log(randomIndex)

    return (
        <div className='bingo'>
            {sentence.map((item, index) => (
            <>
                {index < 1 && (
                    <h2 className='bingo__title' key={item.key}>{item.sentence}</h2>   
                )}
            </>
            ))}
            <ul className='bingo__board'>
                {arr.map(item => (
                   <li className='bingo__item' key={item.key}><img src={item.img} alt={item.img} /></li> 
                ))}
            </ul>
        </div>
    )
}

export default Bingo;