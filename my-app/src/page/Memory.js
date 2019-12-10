import React, { useState, useEffect } from 'react';
import MemoryBoard from '../components/MemoryBoard';
import '../style/memory.scss';
import book from '../icon/book.png';
import bed from '../icon/bed.png';
import rainbow from '../icon/rainbow.png';
import ball from '../icon/ball.png';
import sea from '../icon/sea.png';
import bridge from '../icon/bridge.png';

const Memory = () => {

    const [arr, setArr] = useState([]);
    const [hasFlipped, setHasFlipped] = useState(false);
    let secondCard
    const [imgCard, setImgCard] = useState();
    const [firstCard, setFirstCard] = useState();
    const [lockBoard, setLockBoard] = useState(false)
    const [score, setScore] = useState(0)

    let reverseSound = new Audio("../sounds/reverse.mp3");
    let correctSound = new Audio("../sounds/correct.mp3");
    let wrongSound = new Audio("../sounds/wrong.mp3");


    useEffect(() => {
        setArr([
            {source: 'Book', key: 1},
            {source: bed, key: 3},
            {source: 'Sea', key: 6},
            {source: bridge, key: 2},
            {source: rainbow, key: 4},
            {source: 'Ball', key: 5},
            {source: 'Rainbow', key: 4},
            {source: 'Bed', key: 3},
            {source: sea, key: 6},
            {source: book, key: 1},
            {source: 'Bridge', key: 2},
            {source: ball, key: 5},
        ])
        // ShuffleArr = shuffleArray(arr);
    }, [])

    const onClick = (e, item) => {
        if(lockBoard) return;
        if(e.target === firstCard) return;
        
        
        reverseSound.play()
        
        if(!hasFlipped) {
            setHasFlipped(true);
            setFirstCard(e.target)
            e.target.classList.add('memory__card--rotate')
            if(e.target.firstElementChild !== null) {
                e.target.firstElementChild.classList.add('memory__card--block')
            }
            return;
        }
        if(e.target.firstElementChild !== null) {
            e.target.firstElementChild.classList.add('memory__card--block')
        }
        
        setImgCard(e.target.firstElementChild)

        secondCard = e.target;
        secondCard.classList.add('memory__card--rotate')

        checkForMatch();
            
        }

        const checkForMatch = () =>  {
            let isMatch = firstCard.className === secondCard.className;
            isMatch ? disableCards() : unflipCards();            
        }

        const disableCards = () => {
            firstCard.removeEventListener('click', onClick);
            secondCard.removeEventListener('click', onClick);
            firstCard.classList.add('memory__card--correct');
            secondCard.classList.add('memory__card--correct');
            correctSound.play();
            setScore(score + 1)
            if(score === arr.length - 1) {
                alert("Gratulacje")
            }
          
            resetBoard();
          }

        const unflipCards = () => {
        setLockBoard(true);
        wrongSound.play();
        
            setTimeout(() => {
                firstCard.classList.remove('memory__card--rotate');
                secondCard.classList.remove('memory__card--rotate');
                if(firstCard.firstElementChild !== null) {
                    firstCard.firstElementChild.classList.remove('memory__card--block');
                }
                if(secondCard.firstElementChild !== null) {
                    secondCard.firstElementChild.classList.remove('memory__card--block');
                }
                resetBoard();
            }, 1000);
        }

        const resetBoard = () => {
            setLockBoard(false);
            setHasFlipped(false);
            setFirstCard(null);
            secondCard = null;
        }

        const shuffleArray = array => {
            let i = array.length - 1;
            for (; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              const temp = array[i];
              array[i] = array[j];
              array[j] = temp;
            }
            return array;
          }

    return (
        <>
        <MemoryBoard arr={arr} onClick={onClick} />
        </>
    )
};

export default Memory;