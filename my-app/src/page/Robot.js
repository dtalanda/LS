import React, { useRef } from 'react';
import RobotBoard from '../components/RobotBoard';
import ControllRobot from '../components/ControllRobot';
import '../style/robot.scss'


const Robot = () => {

    const heroRef = useRef(null);

    return (
        <>
            <RobotBoard heroRef={heroRef} />
            <ControllRobot />
        </>
    )
}

export default Robot;
