import React from 'react';

import './Result.css';
import reload from '../../assets/reload.svg';

const result = (props) => (
    <div className='Result'>
        <h2>Test name ?</h2>
        <h3>{props.score} / 6</h3>
        <div className='Score'>
            <b>Your result is {props.score}</b>
            <p>Some text</p>
        </div>
        <span onClick={props.onClick}><img src={reload} alt='restart test'/> Restart test</span>    
    </div>
);

export default result;