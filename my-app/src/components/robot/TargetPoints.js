import React from 'react';

const TargetPoints = props => {

    const arr = props.arr;

    return (
        <>
            {arr.map(item => (
                <div className='target' key={item.key} style={{top: item.y, left: item.x, display: item.display, background: item.color}}>{item.key}</div>
            ))}
        </>
    )
}

export default TargetPoints;