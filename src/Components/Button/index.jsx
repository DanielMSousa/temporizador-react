import React from 'react';

import './styles.css';

const Button = props => <button className="button" onClick={props.toggle}>{props.children}</button>

export default Button;