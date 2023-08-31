import React from 'react';



const ControllRobot = props => {

    const heroControll = props.heroControll;

    return (
        <div className='button'>
            <span onClick={(e) => heroControll("ArrowLeft")} className='button__item button__item--left'></span>
            <span onClick={(e) => heroControll("ArrowUp")} className='button__item button__item--up'></span>
            <span onClick={(e) => heroControll("ArrowDown" )} className='button__item button__item--down'></span>
            <span onClick={(e) => heroControll("ArrowRight")} className='button__item button__item--right'></span>
        </div>
    )
}

export default ControllRobot;
