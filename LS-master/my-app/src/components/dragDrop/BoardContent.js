import React from 'react';
import Board from './Board';

const BoardContent = props => {
    const question = props.question;
    const history = props.history
    const backToMain = props.backToMain;

    return (
        <div className='flex'>
            {question.map(item => (
                <Board id={item.className} drop={props.drop} history={history} key={item.id} backToMain={backToMain} question={question} sentence={props.sentence.length} className='board'/>
            ))}
        </div>
    )
}

export default BoardContent;