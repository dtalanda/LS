import React, { useState, useEffect, useRef } from 'react';
import ProjectorBoard from '../components/projector/ProjectorBoard';
import Board from '../components/dragDrop/Board';
import Card from '../components/dragDrop/Card';
import book from '../icon/book.png';
import bed from '../icon/bed.png';
import rainbow from '../icon/rainbow.png';
import ball from '../icon/ball.png';
import sea from '../icon/sea.png';
import bridge from '../icon/bridge.png';

const Projector = props => {

    const [arr, setArr] = useState([]);
    const [resetDOM, setResetDOM] = useState(false);
    const titleRef = useRef();

    useEffect(() => {

        setArr([
            {source: bed, sentence: 'bed', key: 3},
            {source: bridge, sentence: 'bridge', key: 2},
            {source: rainbow, sentence: 'rainbow', key: 4},
            {source: sea, sentence: 'sea', key: 6},
            {source: book, sentence: 'book', key: 1},
            {source: ball, sentence: 'ball', key: 5},
        ])
    }, [])

    const resetDom = (arr) => (
        <>
            {arr.map((item, index) => (
                <>
                {index < 1 && (
                    <>
                    <h2 className='projector__title' ref={titleRef}>{item.sentence}</h2>
                    <div className='projector'>
                        <Board id='board' className='projector__board' drop={drop} />
                        <Card id={item.key} className='projector__card' draggable={true}><img className='projector__img' src={item.source} alt={item.source}></img></Card>
                    </div>
                    </>
                )}
                </>
            ))}
        </>
    )

    const drop = e => {
        e.preventDefault();
        const card_id = e.dataTransfer.getData('card_id');    
        const card = document.getElementById(card_id);

        card.style.display = 'flex';
        e.target.appendChild(card);

        titleRef.current.style.fontSize = '55px';
        
        setTimeout(() => {
            setResetDOM(true);
            const newArr = arr.filter((item, index) => index !== 0);
            setArr(newArr);
            setResetDOM(false)
        }, 1500)

    }


    return (
    <>
    {resetDOM ? resetDom(arr) : <ProjectorBoard titleRef={titleRef} drop={drop} arr={arr} />}
    </>
    )
}

export default Projector;