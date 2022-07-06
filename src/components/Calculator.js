import React, { useState, useEffect } from "react";

import styles from "./Calculator.module.css";

import Display from "./Display";
import KeyPad from "./KeyPad/KeyPad";

const Calculator = () => {
	const [input, setInput] = useState("0"); // String
	const [currTotal, setCurrTotal] = useState(0); // Float
	const [sign, setSign] = useState(""); // Operation Sign as String

	useEffect(() => {
		setInput(String(currTotal));
	}, [currTotal]);

	function evaluate() {
		if (sign === "") {
			setCurrTotal(parseFloat(input));
		} else if (sign === "+") {
			setCurrTotal(currTotal + parseFloat(input));
		} else if (sign === "-") {
			setCurrTotal(currTotal - parseFloat(input));
		} else if (sign === "×") {
			setCurrTotal(currTotal * parseFloat(input));
		} else if (sign === "÷") {
			setCurrTotal(currTotal / parseFloat(input));
		}
	}

	function numInput(entry) {
		// if current stored value for input is zero, handle if specially
		if (input === "0") {
			// if new entry is not zero that means it's the first none zero entry
			if (entry != "0") {
				setInput(entry);
			}
			return;
		}
		// check if the new entry is part of a new number
		if (input == currTotal) {
			setInput(entry);
		} else {
			setInput(input + entry);
		}
	}

	function newEntry(entry) {
		if (entry == "+" || entry == "-" || entry == "×" || entry == "÷") {
			evaluate();
			setSign(entry);
		} else if (entry == "=") {
			evaluate();
		} else if (entry == "AC") {
			setInput("0");
			setCurrTotal(0);
			setSign("");
		} else if (entry == "+/-") {
			setInput(input * -1);
		} else if (entry == "%") {
			if (parseFloat(input) != NaN && input != "0") {
				setInput(input / 100);
			}
		} else {
			numInput(entry);
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
