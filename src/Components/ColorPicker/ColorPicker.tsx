import { CSSProperties, useRef, useState } from 'react';
import {
	Block,
	Colorful,
	ColorResult,
	ShadeSlider,
	Slider,
} from '@uiw/react-color';
import clsx from 'clsx';

import useOnClickOutside from '../../Shared/useOnClickOutside';
import Button from '../Button';
import Modal from '../Modal';

import { ColorPickerProps } from './types';

import styles from './ColorPicker.module.css';

function ColorPicker({
	selectedColor,
	onSelect,
	className,
	style,
}: ColorPickerProps) {
	const [isShown, setIsShown] = useState<boolean>(false);
	const ref = useRef<HTMLDivElement | null>(null);
	function handleChange(color: ColorResult) {
		console.log(color);
		onSelect(color.hex);
	}
	function handleButtonClick() {
		setIsShown(true);
	}
	function handleClose() {
		setIsShown(false);
	}

	return (
		<div className={clsx(styles.root, className)} style={style}>
			<Button
				className={styles.button}
				color={selectedColor}
				style={{ '--color': selectedColor } as CSSProperties}
				onClick={handleButtonClick}
			/>
			{isShown && (
				<Modal onClose={handleClose}>
					<div className={styles.pickers}>
						<div className={styles.title}>Choose your color</div>
						<Colorful
							color={selectedColor}
							onChange={handleChange}
							disableAlpha
							className={styles.picker}
						/>
						<Slider
							color={selectedColor}
							onChange={handleChange}
							className={styles.picker}
						/>
					</div>
				</Modal>
			)}
		</div>
	);
}

export default ColorPicker;
