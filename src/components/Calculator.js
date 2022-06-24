import React from "react";

import Display from "./Display";
import KeyPad from './KeyPad/KeyPad';
import Button from "./KeyPad/Button";

const Calculator = () => {

	return (
		<React.Fragment>
			<Display />
            <KeyPad />
		</React.Fragment>
	);
};

export default Calculator;
