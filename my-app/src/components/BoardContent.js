import React from 'react';
import Board from './Board'

const BoardContent = props => {
    const question = props.question;

    return (
        <div className='flex'>
            {question.map(item => (
                <Board id={item.className} className='board'/>
            ))}
        </div>
    )
}

export default BoardContent;