import { CSSProperties } from 'react';
import clsx from 'clsx';

import Button from '../Button';

import { SwitcherProps } from './types';

import styles from './Switcher.module.css';

function Switcher({
	items,
	selectedItemId,
	onSelect,
	className,
	style,
}: SwitcherProps) {
	const switcherItems = items.map(({ id, label, icon }) => (
		<Button
			className={clsx(styles.item, {
				[styles.item__selected]: id === selectedItemId,
			})}
			key={id}
			onClick={() => onSelect(id)}
		>
			<div className={styles.item_content}>
				{icon && <div className={styles.icon_wrapper}>{icon}</div>}
				<div className={styles.label}>{label} </div>
			</div>
		</Button>
	));

	return (
		<div
			className={clsx(styles.root, className)}
			style={{ ...style, '--items-count': items.length } as CSSProperties}
		>
			{switcherItems}
		</div>
	);
}

export default Switcher;
