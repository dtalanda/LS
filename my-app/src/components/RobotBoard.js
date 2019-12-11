import React, { useState, useEffect } from 'react';



const RobotBoard = props => {

    let axisX = 300;
    let axisY = 300;
    let rotate = 90;

    let direction = 'down';

    const heroRef = props.heroRef;

    useEffect(() => {
        document.addEventListener('keydown', (e) => keyDown(e));
      
        return () => {
          document.removeEventListener('keydown', (e) => keyDown(e))
        }
      }, [])



    const moveHero = (boolean, direction ) => {

        if(boolean === true && direction === 'right') {
            axisX = axisX + 75
            heroRef.current.style.background = `purple`
            heroRef.current.style.left = `${axisX}px`
        }
        if(boolean === false && direction === 'left') {
            axisX = axisX - 75
            heroRef.current.style.background = `pink`
            heroRef.current.style.left = `${axisX}px`
        }
        if(boolean === false && direction === 'up') {
            axisY = axisY - 75
            heroRef.current.style.background = `green`
            heroRef.current.style.left = `${axisY}px`
        }
        if(boolean === true && direction === 'down') {
            axisY = axisY + 75
            heroRef.current.style.background = `black`
            heroRef.current.style.left = `${axisY}px`
        }

        if( axisX === 150 && axisY === 450) {
            setTimeout(() => {
               alert('ok') 
            }, 500)
        }
    }


    const keyDown = (e) => {
        if (e.key === "ArrowRight") {

            rotate = rotate + 90;
            heroRef.current.style.transform = `rotate(${rotate}deg)`;
            switch(direction) {
                case 'right': direction = 'down';
                    break;
                case 'down': direction = 'left';
                    break;
                case 'left': direction = 'up';
                    break;
                case 'up': direction = 'right';
                    break;
            }        
        } else if(e.key === "ArrowLeft") {

            rotate = rotate - 90;
            heroRef.current.style.transform = `rotate(${rotate}deg)`;

            switch(direction) {
                case 'right': direction = 'up';
                    break;
                case 'up': direction = 'left';
                    break;
                case 'left': direction = 'down';
                    break;
                case 'down': direction = 'right';
                    break;                
            }        
        } else if(e.key === "ArrowUp") {
            switch(direction) {
                case 'right': 
                    axisX = axisX + 75;
                    heroRef.current.style.left = `${axisX}px`;
                    break;
                case 'left':
                    axisX = axisX - 75;
                    heroRef.current.style.left = `${axisX}px`;
                    break;
                case 'up':
                    axisY = axisY - 75;
                    heroRef.current.style.top = `${axisY}px`;
                    break;
                case 'down': 
                    axisY = axisY + 75;
                    heroRef.current.style.top = `${axisY}px`;
                    break;
            }
        }
        // if(e.key === "ArrowDown") {
        //     axisY = axisY + 75
        //     heroRef.current.style.top = `${axisY}px`
        //     heroRef.current.style.background = `purple`
        // }
        if( axisX === 150 && axisY === 450) {
            setTimeout(() => {
               alert('ok') 
            }, 500)
        }
    }
    


    return (axisY, 
        <>
            <div className='arena'>
                <div className='hero' ref={heroRef}><img src="https://img.icons8.com/ios/50/000000/arrow.png" /></div>
                <div className='target'></div>
            </div>
            <button onClick={() => moveHero(true, 'right')}>Prawo</button>
            <button onClick={() => moveHero(false, 'left' )}>Lewo</button>
            <button onClick={() => moveHero(false, 'up' )}>Góra</button>
            <button onClick={() => moveHero(true, 'down' )}>Dół</button>
        </>
    )
}

export default RobotBoard;
