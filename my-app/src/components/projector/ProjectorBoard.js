import React from 'react';
import Board from '../dragDrop/Board';
import Card from '../dragDrop/Card';

const ProjectorBoard = props => {

    const arr = props.arr;

    return (
        <>
        {arr.map((item, index) => (
            <>
            {item.source.includes("png") 
            ?
            <span className={`memory__card ${item.key}`} key={item.key} >
                <img src={item.source} className='memory__card--img' alt={item.img}></img>
            </span>
            :
            <p className={`memory__card ${item.key}`} key={item.key}>{item.source}</p>
            }
            </>
        ))}
        </>
    )
}

export default ProjectorBoard;