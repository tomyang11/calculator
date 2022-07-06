import React from 'react';

import styles from './Button.module.css';

const Button = (props) => {

    function clickHandler() {
        props.onClick(props.value);
    }

    return <button className={styles.button} onClick={clickHandler}>{props.value}</button>
}

export default Button;