import React from 'react';
import MazeCard from './MazeCard';
import MazeTitle from './MazeTitle';

const MazeBoard = props => {

    const sentence = props.sentence;
    const img = props.img;
    const onClick = props.onClick;

    return (
        <div className='block'>
            <MazeTitle sentence={sentence} />
            <MazeCard img={img} onClick={onClick} />
        </div>
    )
}

export default MazeBoard;