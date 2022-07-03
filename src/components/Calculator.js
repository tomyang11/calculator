import React, { useState } from "react";

import styles from './Calculator.module.css';

import Display from "./Display";
import KeyPad from './KeyPad/KeyPad';

const Calculator = () => {

    const [input, setInput] = useState('0');
    let currVal = 0;
    let operationsSeries = [];

    function evaluate(entry) {
        console.log(operationsSeries[1]);
        if (operationsSeries[1] === '+') {
            console.log("in evaluate's if");
            let newValue = operationsSeries[0] + parseFloat(operationsSeries[2]);
            resetOperationsSeries(newValue, entry);
            setInput(String(newValue));
        }
    }

    function resetOperationsSeries(newValue, entry) {
        operationsSeries.length = 0;
        operationsSeries.push(newValue);
        operationsSeries.push(entry);
    }

    function operate(entry) {
        if (operationsSeries.length === 0) {
            console.log(operationsSeries); //testing
            let pushVal = input;
            operationsSeries.push(parseFloat(pushVal));
            operationsSeries.push(entry);
            console.log(operationsSeries); //testing
        } else if (operationsSeries.length === 2) {
            console.log("in operate's second if");
            evaluate(entry);
        }
    }

    function newEntry(entry) {
        if (entry == '+' || entry == '-' || entry == '×' || entry == '÷') {
            operate(entry);
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
