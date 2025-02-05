import clsx from 'clsx';

import { Icons } from '../../Shared/types';
import Button from '../Button';
import Icon from '../Icon';
import Modal from '../Modal';

import { IconsSelectorProps } from './types';

import styles from './IconsSelector.module.css';

function IconsSelector({
	isToBeClosed,
	iconNames,
	onSelect,
	onClose,
	className,
	style,
}: IconsSelectorProps) {
	const icons = iconNames.map((icon: Icons) => (
		<Button className={styles.icon_button} onClick={() => onSelect(icon)}>
			<Icon iconName={icon} className={styles.icon} />
		</Button>
	));

	return (
		<Modal
			isToBeClosed={isToBeClosed}
			className={clsx(styles.root, className)}
			style={style}
			onClose={onClose}
		>
			<div className={styles.content}>
				<div className={styles.title}>Choose your icon</div>
				<div className={styles.icons}>{icons}</div>
			</div>
		</Modal>
	);
}

export default IconsSelector;
