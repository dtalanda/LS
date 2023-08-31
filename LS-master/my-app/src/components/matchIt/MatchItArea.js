import React from 'react';
import MatchItCard from '../matchIt/MatchItCard';
import MatchItBoard from '../matchIt/MatchItBoard';

const MatchItArea = ({arr, target, drop}) => {

    return (
        <>
            <div className='matchit'>
                <MatchItCard arr={arr} />
            </div>
            <div className='matchit'>
                <MatchItBoard target={target} drop={drop} />
            </div>
        </>
    )
}

export default MatchItArea;