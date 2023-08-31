import React from 'react';

const HeroCharacter = props => {

    const heroRef = props.heroRef;

    return (
        <div className='hero' 
            style={{
                top : props.axisY,
                left: props.axisX, 
                transform: `rotate(${props.rotate}deg)`
            }} 
            ref={heroRef}>
                <img src="https://img.icons8.com/ios/50/000000/arrow.png" alt='hero' />
        </div>
    )
}

export default HeroCharacter;