import React, { useState } from "react";

import Button from "./Button";

import styles from "./KeyPad.module.css";

const KeyPad = (props) => {
	return (
		<div className={styles.keypad}>
            <div className={styles['keypad-leftside']}>
                <div className={styles['keypad-specialbtn']}>
                    <Button onClick={props.onClick} id={15} value={"AC"} />
                    <Button onClick={props.onClick} id={16} value={"+/-"} />
                    <Button onClick={props.onClick} id={17} value={"%"} />
                </div>
                <div className={styles['keypad-numbers']}>
                    <Button onClick={props.onClick} id={9} value={'9'} />
                    <Button onClick={props.onClick} id={8} value={'8'} />
                    <Button onClick={props.onClick} id={7} value={'7'} />
                    <Button onClick={props.onClick} id={6} value={'6'} />
                    <Button onClick={props.onClick} id={5} value={'5'} />
                    <Button onClick={props.onClick} id={4} value={'4'} />
                    <Button onClick={props.onClick} id={3} value={'3'} />
                    <Button onClick={props.onClick} id={2} value={'2'} />
                    <Button onClick={props.onClick} id={1} value={'1'} />
                    <Button onClick={props.onClick} id={0} value={'0'} />
                    <Button onClick={props.onClick} id={18} value={"."} />
                </div>
            </div>
            <div className={styles['keypad-rightside']}>
                <div className={styles['keypad-operations']}>
                    <Button onClick={props.onClick} id={10} value={"÷"} />
                    <Button onClick={props.onClick} id={11} value={"×"} />
                    <Button onClick={props.onClick} id={12} value={"-"} />
                    <Button onClick={props.onClick} id={13} value={"+"} />
                    <Button onClick={props.onClick} id={14} value={"="} />
                </div>
            </div>
		</div>
	);
};

export default KeyPad;
