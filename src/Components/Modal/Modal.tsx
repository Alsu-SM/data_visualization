import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

import useOnClickOutside from '../../Shared/useOnClickOutside';

import { ModalProps } from './types';

import styles from './Modal.module.css';

function Modal({
	isToBeClosed,
	children,
	onClose = () => {},
	onCloseBegin = () => {},
	className,
	style,
}: ModalProps) {
	const [isShown, setIsShown] = useState<boolean>(false);
	const [isOut, setIsOut] = useState<boolean>(false);
	const ref = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		setIsShown(true);
	}, []);

	function handleToBeClosed() {
		setIsOut(true);
		onCloseBegin();
		setTimeout(() => {
			setIsShown(false);
			onClose();
		}, 1500);
	}

	useOnClickOutside(ref, handleToBeClosed);

	useEffect(() => {
		if (isToBeClosed) {
			handleToBeClosed();
		}
	}, [isToBeClosed]);

	return (
		<div
			className={clsx(
				styles.modal_container,
				{ [styles.active]: isShown, [styles.out]: isOut },
				className,
			)}
			style={style}
		>
			<div className={styles.modal_background}>
				<div className={styles.modal} ref={ref}>
					<div className={styles.content}>{children}</div>
				</div>
			</div>
		</div>
	);
}

export default Modal;
