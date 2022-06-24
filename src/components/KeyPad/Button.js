import React from 'react';

import './Button.module.css';

const Button = (props) => {

    function clickHandler(event) {
        props.onClick(event.target.value);
    }

    return <button onClick={clickHandler}>{props.value}</button>
}

export default Button;