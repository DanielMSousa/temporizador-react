import React from 'react';
import './styles.css';

const Input = props => (
    <div className="inputs">
        {console.log(props)}
        <input type="text" name="min" min="0" max="59" className="timeInput" value={
            props.min < 10 ? `0${props.min}` : `${props.min}`} onChange={e => props.definirTimer(e)}/>
        <h1>{`:`}</h1>
        <input type="text" name="sec" min="0" max="59" className="timeInput" 
        value={props.sec < 10 ? `0${props.sec}` : `${props.sec}`} onChange={e => props.definirTimer(e)}/>
    </div>
)

export default Input;