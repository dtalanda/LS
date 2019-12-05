import React, { useState, useEffect } from 'react';
import MemoryBoard from '../components/MemoryBoard';
import '../style/memory.scss';

const Memory = () => {

    const [arr, setArr] = useState([]);
    const [hasFlipped, setHasFlipped] = useState(false);
    let secondCard
    let ShuffleArr
    const [firstCard, setFirstCard] = useState();
    const [lockBoard, setLockBoard] = useState(false)
    const [score, setScore] = useState(0)

    useEffect(() => {
        setArr([
            {title: 'Book', key: 1},
            {title: 'Bed', key: 3},
            {title: 'Sea', key: 6},
            {title: 'Bridge', key: 2},
            {title: 'Rainbow', key: 4},
            {title: 'Ball', key: 5},
            {title: 'Rainbow', key: 4},
            {title: 'Bed', key: 3},
            {title: 'Sea', key: 6},
            {title: 'Book', key: 1},
            {title: 'Bridge', key: 2},
            {title: 'Ball', key: 5},
        ])
        ShuffleArr = shuffleArray(arr);
    }, [])

    const onClick = (e, item) => {
        if(lockBoard) return;
        if(e.target === firstCard) return;
        
        if(!hasFlipped) {
            setHasFlipped(true);
            setFirstCard(e.target)
            e.target.classList.add('memory__card--rotate')
            return;
        }

            
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
            setScore(score + 1)
            if(score === arr.length - 1) {
                alert("Gratulacje")
            }
          
            resetBoard();
          }

        const unflipCards = () => {
        setLockBoard(true);
        
            setTimeout(() => {
                firstCard.classList.remove('memory__card--rotate');
                secondCard.classList.remove('memory__card--rotate');

                resetBoard();
            }, 1500);
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
        <MemoryBoard arr={arr} onClick={onClick} />
    )
};

export default Memory;