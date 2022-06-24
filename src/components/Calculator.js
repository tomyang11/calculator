import React, { useState } from "react";

import styles from './Calculator.module.css';

import Display from "./Display";
import KeyPad from './KeyPad/KeyPad';

const Calculator = () => {

    const [enteredVal, setEnteredVal] = useState(0);

	return (
		<div className={styles.calculator}>
			<Display enteredVal={enteredVal} />
            <KeyPad onClick={setEnteredVal} />
		</div>
	);
};

export default Calculator;
