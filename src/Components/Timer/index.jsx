import React from 'react';

import './styles.css';

const Timer = (props) => 
    <h1>{`${props.min >= 10 ? `${props.min}` : `0${props.min}`}:${props.secs >= 10 ? `${props.secs}` : `0${props.secs}`}`}</h1>

export default Timer;