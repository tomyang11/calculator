import React, { useState } from 'react';

import Button from './Button';

const KeyPad = (props) => {

    const numberButtons = [];
    const operationsButtons = [];

	for (let i = 0; i < 10; i++) {
		numberButtons.push(<Button onClick={props.onClick} id={i} value={String(i)} />);
	}

    operationsButtons.push(<Button onClick={props.onClick} id={10} value={'+'} />);
    operationsButtons.push(<Button onClick={props.onClick} id={11} value={'-'} />);
    operationsButtons.push(<Button onClick={props.onClick} id={12} value={'×'} />);
    operationsButtons.push(<Button onClick={props.onClick} id={13} value={'÷'} />);
    operationsButtons.push(<Button onClick={props.onClick} id={14} value={'='} />);

    return <React.Fragment>
        <Button onClick={props.onClick} id={15} value={'AC'} />
        <Button onClick={props.onClick} id={16} value={'+/-'} />
        <Button onClick={props.onClick} id={17} value={'%'} />
        <Button onClick={props.onClick} id={18} value={'.'} />
        {operationsButtons}
        {numberButtons}
    </React.Fragment>
}

export default KeyPad;