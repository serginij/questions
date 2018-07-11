import React from 'react';

import './Card.css';
import correctImage from '../../assets/approved.svg';
import wrongImage from '../../assets/cancel.svg';

const card = (props) => {
    let button = null;
    if ( props.clicked ) {
        button = <button className='button' onClick={props.onClick}>Next</button>
    }

    return (
        <div className='card'>
            <h3>{props.id} / 6</h3>
            <h2><strong>{props.question}</strong></h2>
            <img src={props.imgUrl} alt='test img' />
            {
                props.answers.map((ansv, index) => {
                    let style = props.style;
                    let logo = null;
                    if ( props.clicked && props.answerId === index ) {
                        style = props.answers[props.answerId].type ? 'correct' : 'wrong';
                        logo = style === 'correct' ? correctImage : wrongImage;
                    }
                    return (
                        <div key={index} className={style} onClick={() => {
                            if (!props.clicked) {
                               return props.showAnswer(index, ansv.type);
                            }
                            return null;
                        }}>
                                <b>{ansv.answer}{props.clicked && props.answerId === index && (<img src={logo} alt='type' />)}</b>
                                {props.clicked && props.answerId === index && (<p>{ansv.text}</p>)}
                        </div>
                )})
            }
            {button}
        </div>
    );
};

export default card;