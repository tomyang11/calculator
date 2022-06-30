import React, { useState } from "react";

import styles from './Calculator.module.css';

import Display from "./Display";
import KeyPad from './KeyPad/KeyPad';

const Calculator = () => {

    const [input, setInput] = useState('0');
    let operationsSeries = [];

    function newEntry(entry) {
        if (entry == '+' || entry == '-' || entry == '×' || entry == '÷') {
            if (operationsSeries.length % 2 === 0) {
                let pushVal = input;
                operationsSeries.push(parseFloat(pushVal));
                operationsSeries.push(entry);
            }
        } else if (entry == '=') {
            return 'evaluate';
        } else if (entry == 'AC') {
            operationsSeries.length = 0;
            setInput('0');
        } else if (entry == '+/-') {
            setInput(input * -1);
        } else if (entry == '%') {
            if (parseFloat(input) != NaN && input != '0') {
                setInput(input / 100);
            }
        } else {
            // if current stored value for input is zero, handle if specially
            if (input === '0') {
                // if new entry is not zero that means it's the first none zero entry
                if (entry != '0') {
                    setInput(entry);
                }
                return
            }
            // check if the new entry is part of a new number
            if (input == operationsSeries[0]) {
                setInput(entry);
            } else {
                setInput(input + entry);
            }
        }
    }

	return (
		<div className={styles.calculator}>
			<Display displayVal={input} />
            <KeyPad onClick={newEntry} />
		</div>
	);
};

export default Calculator;
