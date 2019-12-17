import React from 'react';



const ControllRobot = props => {

    const heroControll = props.heroControll;

    return (
        <div className='button'>
            <span onClick={(e) => heroControll(e.key = "ArrowLeft")} className='button__item button__item--left'></span>
            <span onClick={(e) => heroControll(e.key = "ArrowUp")} className='button__item button__item--up'></span>
            <span onClick={(e) => heroControll(e.key = "ArrowRight")} className='button__item button__item--right'></span>
            <span onClick={(e) => heroControll(e.key = "ArrowDown" )}></span>
        </div>
    )
}

export default ControllRobot;
