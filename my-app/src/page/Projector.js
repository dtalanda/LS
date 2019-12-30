import React, { useState, useEffect } from 'react';
import ProjectorBoard from '../components/projector/ProjectorBoard';
import book from '../icon/book.png';
import bed from '../icon/bed.png';
import rainbow from '../icon/rainbow.png';
import ball from '../icon/ball.png';
import sea from '../icon/sea.png';
import bridge from '../icon/bridge.png';


const Projector = () => {

    const [arr, setArr] = useState([]);

    useEffect(() => {
        setArr([
            {source: 'Book', key: 1},
            {source: bed, key: 3},
            {source: 'Sea', key: 6},
            {source: bridge, key: 2},
            {source: rainbow, key: 4},
            {source: 'Ball', key: 5},
            {source: 'Rainbow', key: 4},
            {source: 'Bed', key: 3},
            {source: sea, key: 6},
            {source: book, key: 1},
            {source: 'Bridge', key: 2},
            {source: ball, key: 5},
        ])
    }, [])


    return (
    <>
        <ProjectorBoard arr={arr} />
    </>
    )
}

export default Projector;