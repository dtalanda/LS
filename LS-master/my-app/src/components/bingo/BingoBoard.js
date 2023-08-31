import React from 'react'

const BingoBoard = props => {

    const arr = props.arr;
    const checkBingo = props.checkBingo;

    return (
        <ul className='bingo__board'>
                {arr.map(item => (
                   <li className='bingo__item' onClick={(e) => checkBingo(item, e)} key={item.key}><img src={item.img} alt={item.img} /></li> 
                ))}
            </ul>
    )
}

export default BingoBoard;