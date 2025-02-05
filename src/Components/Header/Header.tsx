import clsx from 'clsx';

import { HeaderProps } from './types';

import styles from './Header.module.css';

function Header({ className, style }: HeaderProps) {
	return (
		<div className={clsx(styles.root, className)} style={style}>
			uwu
		</div>
	);
}

export default Header;
