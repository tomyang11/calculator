import React, { useState } from "react";

import styles from './Calculator.module.css';

import Display from "./Display";
import KeyPad from './KeyPad/KeyPad';

const Calculator = () => {

    const [input, setInput] = useState('0');
    let operationsSeries = [];

    let dotCounter = 0;
    let zeroCount = 0;
    function newEntry(entry) {
        // console.log('entry is ' + entry);
        // console.log('input is ' + input);
        // if (entry === '.' && dotCounter === 0) {
        //     // console.log('entered second if');
        //     setInput(input + '.');
        //     dotCounter++;
        // } else if (typeof entry === "number" && input.toString().includes('.')) {
        //     // console.log('entered third if');
        //     setInput(parseInt(input.toString().slice(0, input.toString().length - 1)) + entry / 10)
        // } else if (typeof entry === "number" && !input.toString().includes('.')) {
        //     // console.log('entered first if');
        //     setInput(input * 10 + entry);
        // }
        if (entry == '+' || entry == '-' || entry == '×' || entry == '÷') {
            return 'operation';
        } else if (entry == '=') {
            return 'evaluate';
        } else if (entry == 'AC') {
            return 'clear';
        } else if (entry == '+/-') {
            return 'sign';
        } else if (entry == '%') {
            return 'percent';
        } else {
            if (entry == '0' && parseInt(input) === 0) {
                return;
            }
            if (input === '0') {
                console.log("entered");
                setInput(entry);
                return;
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
