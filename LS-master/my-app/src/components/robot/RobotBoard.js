import React from 'react';
import ControllRobot from './ControllRobot';
import HeroCharacter from './HeroCharacter';
import TargetPoints from './TargetPoints';
import TargetTip from './TargetTip'


const RobotBoard = props => {
    const heroRef = props.heroRef;
    const arr = props.arr;
    const heroControll = props.heroControll;
    const axisX = props.axisX;
    const axisY = props.axisY;
    const rotate = props.rotate;
    
    return (
        <>
            <TargetTip arr={arr} />
            <div className='arena'>
                <HeroCharacter 
                    heroRef={heroRef} 
                    axisX={axisX} 
                    axisY={axisY} 
                    rotate={rotate}  
                />
                <TargetPoints arr={arr} />
            </div>
            
            <ControllRobot heroControll={heroControll} />
        </>
    )
}

export default RobotBoard;
