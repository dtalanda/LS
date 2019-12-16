import React, { useEffect, useState } from 'react';

const RobotBoard = props => {
    const heroRef = props.heroRef;
    const arr = props.arr;
    const heroControll = props.heroControll;
    const pointRef = props.pointRef;
    
    return (
        <>
            <div className='arena'>
                <div className='hero' ref={heroRef}><img src="https://img.icons8.com/ios/50/000000/arrow.png" /></div>
                {arr.map(item => (
                    <div className='target' key={item.key} ref={pointRef} style={{top: item.x, left: item.y, display: item.display, background: item.color}} />
                ))}
                {/* <div className='target'></div> */}
            </div>
            <div className='button'>
                <span onClick={(e) => heroControll(e.key = "ArrowLeft")} className='button__item button__item--left'></span>
                <span onClick={(e) => heroControll(e.key = "ArrowUp")} className='button__item button__item--up'></span>
                <span onClick={(e) => heroControll(e.key = "ArrowRight")} className='button__item button__item--right'></span>
                <span onClick={(e) => heroControll(e.key = "ArrowDown" )}></span>
            </div>
        </>
    )
}

export default RobotBoard;
