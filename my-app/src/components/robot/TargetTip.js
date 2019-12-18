import React from 'react';

const TargetTip = props => {

    const arr = props.arr;
    const newArr = arr.filter(item => item.display !== "none");

    return (
        <>
            {newArr.map((item, index) => (
                <>
                {index < 1 && (
                    <h2 className='title'>Collect a {item.color} dot</h2>
                )}
                </>
            ))}
        </>
    )
}

export default TargetTip;