import React from "react";

import styles from "./Button.module.css";

const Button = (props) => {

	function clickHandler() {
		props.onClick(props.value);
	}

	let operationButton = false;
	if (
		props.value === "+" ||
		props.value === "-" ||
		props.value === "×" ||
		props.value === "÷" ||
		props.value === "="
	) {
		operationButton = true;
	}

    let zeroButton = false;
    if (props.value === '0') {
        zeroButton = true;
    }

	return (
		<button
			className={`${styles.button} ${operationButton && styles.operation} ${zeroButton && styles.zero}`}
			onClick={clickHandler}
		>
			{props.value}
		</button>
	);
};

export default Button;
