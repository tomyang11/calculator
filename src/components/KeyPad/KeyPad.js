import React, { useState } from 'react';

import Button from './Button';

const KeyPad = (props) => {

    const numberButtons = [];
    const operationsButtons = [];

	for (let i = 0; i < 10; i++) {
		numberButtons.push(<Button onClick={props.onClick} id={i} value={i} />);
	}

    operationsButtons.push(<Button id={10} value={'+'} />);
    operationsButtons.push(<Button id={11} value={'-'} />);
    operationsButtons.push(<Button id={12} value={'×'} />);
    operationsButtons.push(<Button id={13} value={'÷'} />);
    operationsButtons.push(<Button id={14} value={'='} />);

    return <React.Fragment>
        <Button id={15} value={'AC'} />
        <Button id={16} value={'+/-'} />
        <Button id={17} value={'%'} />
        <Button id={18} onClick={props.onClick} value={'.'} />
        {operationsButtons}
        {numberButtons}
    </React.Fragment>
}

export default KeyPad;