import React from 'react';
import Board from '../dragDrop/Board';
import Card from '../dragDrop/Card';

const ProjectorBoard = props => {

    const arr = props.arr;
    const drop = props.drop;
    const titleRef = props.titleRef;

    return (
        <>
            {arr.map((item, index) => (
                <>
                {index < 1 && (
                    <>
                    <h2 className='projector__title' ref={titleRef}>{item.sentence}</h2>
                    <div className='projector'>
                        <Board id='board' className='projector__board' drop={drop} />
                        <Card id={item.key} className='projector__card' draggable={true}><img className='projector__img' src={item.source} alt={item.source}></img></Card>
                    </div>
                    </>
                )}
                </>
            ))}
        </>
    )
}


export default ProjectorBoard;