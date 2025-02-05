import clsx from 'clsx';

import { InputProps } from './types';

import styles from './Input.module.css';

function Input({ className, style, ...defaultInputProps }: InputProps) {
	return (
		<div className={clsx(styles.wrapper, className)} style={style}>
			<input className={clsx(styles.input)} {...defaultInputProps} />
			<div className={styles.background}></div>
		</div>
	);
}

export default Input;
