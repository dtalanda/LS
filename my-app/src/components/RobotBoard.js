import React, { useState, useEffect } from 'react';



const RobotBoard = props => {

    let axisX = 300;
    let axisY = 300;
    let rotate = 90;
    let direction = 'down';

    const heroRef = props.heroRef;

    useEffect(() => {
        document.addEventListener('keydown', (e) => moveHero(e));
      
        return () => {
          document.removeEventListener('keydown', (e) => moveHero(e))
        }
      }, [])


    const moveHero = (e) => {

        if (e.key === "ArrowRight" || e === "ArrowRight" ) {

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
        } else if(e.key === "ArrowLeft" || e === "ArrowLeft") {

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
        } else if(e.key === "ArrowUp" || e === "ArrowUp") {
            switch(direction) {
                case 'right': 
                    axisX = axisX + 75;
                    heroRef.current.style.left = `${axisX}px`;
                    heroPosition(axisX);
                    break;
                case 'left':
                    axisX = axisX - 75;
                    heroRef.current.style.left = `${axisX}px`;
                    heroPosition(axisX);
                    break;
                case 'up':
                    axisY = axisY - 75;
                    heroRef.current.style.top = `${axisY}px`;
                    heroPosition(axisY);
                    break;
                case 'down': 
                    axisY = axisY + 75;
                    heroRef.current.style.top = `${axisY}px`;
                    heroPosition(axisY);
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
    const heroPosition = axis => {
        if(axis > 601) {
            if(axis === axisY) {
                axisY = 600;
                heroRef.current.style.top = `600px`;  
            } else if(axis === axisX) {
                axisX = 600;
                heroRef.current.style.left = `600px`;
            }            
        } else if(axis < -1) {
            if(axis === axisY) {
                axisY = 0;
                heroRef.current.style.top = `0px`; 
            } else if(axis === axisX) {
                axisX = 0;
                heroRef.current.style.left = `0px`;
            }
            
        }
    }
    
    return (
        <>
            <div className='arena'>
                <div className='hero' ref={heroRef}><img src="https://img.icons8.com/ios/50/000000/arrow.png" /></div>
                <div className='target'></div>
            </div>
            <button  onClick={(e) => moveHero(e.key = "ArrowRight")}>Prawo</button>
            <button onClick={(e) => moveHero(e.key = "ArrowLeft")}>Lewo</button>
            <button onClick={(e) => moveHero(e.key = "ArrowUp")}>Góra</button>
            {/* <button onClick={(e) => moveHero(true, 'down' )}>Dół</button> */}
        </>
    )
}

export default RobotBoard;
