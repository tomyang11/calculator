import React from 'react';

import './Button.module.css';

const Button = (props) => {

    function clickHandler() {
        props.onClick(props.value);
    }

    return <button onClick={clickHandler}>{props.value}</button>
}

export default Button;