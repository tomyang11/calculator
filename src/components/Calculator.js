import React, { useState } from "react";

import styles from './Calculator.module.css';

import Display from "./Display";
import KeyPad from './KeyPad/KeyPad';

const Calculator = () => {

    const [input, setInput] = useState('0');
    let operationsSeries = [];

    function newEntry(entry) {
        if (entry == '+' || entry == '-' || entry == '×' || entry == '÷') {
            let pushVal = input;
            operationsSeries.push(parseFloat(pushVal));
            operationsSeries.push(entry);
            console.log(operationsSeries[0]);
        } else if (entry == '=') {
            return 'evaluate';
        } else if (entry == 'AC') {
            operationsSeries.length = 0;
            setInput('0');
        } else if (entry == '+/-') {
            return 'sign';
        } else if (entry == '%') {
            if (parseFloat(input) != NaN && input != '0') {
                setInput(input / 100);
            }
        } else {
            if (input === '0') {
                if (entry != '0') {
                    setInput(entry);
                }
                return
            }
            setInput(input + entry);
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
