import React, { useState } from "react";

import styles from './Calculator.module.css';

import Display from "./Display";
import KeyPad from './KeyPad/KeyPad';

const Calculator = () => {

    const [input, setInput] = useState('0'); // String
    const [currTotal, setCurrTotal] = useState(0); // Int
    const [sign, setSign] = useState(""); // Operation Sign as String

    function operate(entry) {
        console.log("input is " + input);
        if (sign === "") {
            console.log("sign is empty");
            setCurrTotal(parseFloat(input));
        } else if (sign === '+') {
            console.log("sign === +");
            setCurrTotal(currTotal + parseFloat(input));
        }
        setSign(entry);
        setInput(String(currTotal));
        console.log("input is: " + input + " currTotal is: " + currTotal);
    }

    function newEntry(entry) {
        if (entry == '+' || entry == '-' || entry == '×' || entry == '÷') {
            operate(entry);
        } else if (entry == '=') {
            return 'evaluate';
        } else if (entry == 'AC') {
            setInput('0');
            setCurrTotal(0);
            setSign('');
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
            if (input == currTotal) {
                console.log("好极了");
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
