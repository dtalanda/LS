import React, { useState, useEffect } from 'react';

const RobotBoard = props => {

    let axisX = 300;
    let axisY = 300;
    let rotate = 90;
    let direction = 'down';

    const heroRef = props.heroRef;

    useEffect(() => {
        document.addEventListener('keydown', (e) => heroControll(e));
      
        return () => {
          document.removeEventListener('keydown', (e) => heroControll(e))
        }
      }, [])

    const heroTurnRight = (value) => {
        rotate = rotate + value;
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
    };
    const heroTurnLeft = (value) => {
        rotate = rotate - value;
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
    }
    const heroMoveForward = (value) => {
        switch(direction) {
            case 'right': 
                axisX = axisX + value;
                heroRef.current.style.left = `${axisX}px`;
                heroPosition(axisX);
                break;
            case 'left':
                axisX = axisX - value;
                heroRef.current.style.left = `${axisX}px`;
                heroPosition(axisX);
                break;
            case 'up':
                axisY = axisY - value;
                heroRef.current.style.top = `${axisY}px`;
                heroPosition(axisY);
                break;
            case 'down': 
                axisY = axisY + value;
                heroRef.current.style.top = `${axisY}px`;
                heroPosition(axisY);
                break;
        }
    }


    const heroControll = (e) => {

        if (e.key === "ArrowRight" || e === "ArrowRight" ) {
            heroTurnRight(90);                  
        } else if(e.key === "ArrowLeft" || e === "ArrowLeft") {
            heroTurnLeft(90);                    
        } else if(e.key === "ArrowUp" || e === "ArrowUp") {
            heroMoveForward(75);
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
            <div className='button'>
                <span onClick={(e) => heroControll(e.key = "ArrowLeft")} className='button__item button__item--left'></span>
                <span onClick={(e) => heroControll(e.key = "ArrowUp")} className='button__item button__item--up'></span>
                <span onClick={(e) => heroControll(e.key = "ArrowRight")} className='button__item button__item--right'></span>
                {/* <span onClick={(e) => heroControll(true, 'down' )}></span> */}
            </div>
        </>
    )
}

export default RobotBoard;
