import React, { useRef, useState, useEffect } from 'react';
import RobotBoard from '../components/RobotBoard';
import ControllRobot from '../components/ControllRobot';
import '../style/robot.scss'


const Robot = () => {

    const heroRef = useRef(null);
    const pointRef = useRef(null);
    const [arr, setArr] = useState([
        {x: 600 , y: 600, color: 'blue', display: 'block', key: 1 },
        {x: 0 , y: 0, color: 'red', display: 'block', key: 2 },
        {x: 450 , y: 150, color: 'yellow', display: 'block', key: 3 },
        {x: 150 , y: 450, color: 'black', display: 'block', key: 4 },
        {x: 0 , y: 600, color: 'green', display: 'block', key: 5 },
    ]);
    let targetX = 600;
    let targetY = 600;

    let axisX = 300;
    let axisY = 300;
    let rotate = 90;
    let direction = 'down';
    let keyTarget = 0;

    useEffect(() => {
        
        keyDown();
    }, arr)

    const keyDown = () => {
        document.addEventListener('keydown', (e) => heroControll(e));
      
        return () => {
          document.removeEventListener('keydown', (e) => heroControll(e))
        }
    };

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
        console.log(arr)
        console.log(targetX, 'x')
        console.log(targetX, 'y')
        console.log(axisX, 'ox')
        console.log(axisY, 'oy')

        if (e.key === "ArrowRight" || e === "ArrowRight" ) {
            heroTurnRight(90);                  
        } else if(e.key === "ArrowLeft" || e === "ArrowLeft") {
            heroTurnLeft(90);                    
        } else if(e.key === "ArrowUp" || e === "ArrowUp") {
            heroMoveForward(75);
        } else if(e.key === "ArrowDown" || e === "ArrowDown") {
            heroTurnLeft(180);
        }

        if( axisX === targetX && axisY === targetY) {
            // const newArr = arr.map(item => {
            //     if(item.x === targetX && item.y === targetY) {
            //         return {
            //             ...item,
            //             display: 'none'
            //         }
            //     }
            //     return item
            // })  
            const newArr = arr.filter((item, index) => index !== 0)
            setArr(newArr);
            keyTarget = keyTarget + 1;
            targetX = arr[keyTarget].x;
            targetY = arr[keyTarget].y;
            axisX = 300;
            axisY = 300;
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
            <RobotBoard heroRef={heroRef} arr={arr} pointRef={pointRef} heroControll={heroControll} />
            <ControllRobot />
        </>
    )
}

export default Robot;
