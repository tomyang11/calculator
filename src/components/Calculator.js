import React, { useState } from "react";

import styles from './Calculator.module.css';

import Display from "./Display";
import KeyPad from './KeyPad/KeyPad';

const Calculator = () => {

    const [enteredVal, setEnteredVal] = useState(0);

    // function checkForDot(entry) {
    //     console.log('entry is ' + entry);
    //     console.log('entry.length is ' + entry.toString().length);
    //     if (entry.toString().length === 0) {
    //         return false;
    //     } else if (entry.includes('.')) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    let dotCounter = 0;
    function newEntry(entry) {
        console.log('entry is ' + entry);
        console.log('enteredVal is ' + enteredVal);
        if (entry === '.' && dotCounter === 0) {
            console.log('entered second if');
            setEnteredVal(enteredVal + '.');
            dotCounter++;
        } else if (typeof entry === "number" && enteredVal.toString().includes('.')) {
            console.log('entered third if');
            setEnteredVal(parseInt(enteredVal.toString().slice(0, enteredVal.toString().length - 1)) + entry / 10)
        } else if (typeof entry === "number" && !enteredVal.toString().includes('.')) {
            console.log('entered first if');
            setEnteredVal(enteredVal * 10 + entry);
        }
    }

	return (
		<div className={styles.calculator}>
			<Display displayVal={enteredVal} />
            <KeyPad onClick={newEntry} />
		</div>
	);
};

export default Calculator;
