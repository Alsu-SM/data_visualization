import clsx from 'clsx';

import { ButtonProps } from './Button.interface';

import styles from './Button.module.css';

function Button(props: ButtonProps) {
	const {
		primary,
		className,
		children,
		disabled = false,
		onClick,
		style,
	} = props;
	return (
		<button
			type="button"
			onClick={onClick}
			className={clsx(styles.button, { [styles.primary]: primary }, className)}
			style={style}
			disabled={disabled}
		>
			<div className={styles.button__background} />
			<div className={styles.button__content}>{children}</div>
		</button>
	);
}

export default Button;
