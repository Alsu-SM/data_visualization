import clsx from 'clsx';

import Button from '../../Components/Button';
import Icon from '../../Components/Icon';
import { setIsCreateDataSetModalOpenEvent } from '../../Model/ui/events';
import { Icons } from '../../Shared/types';

import { ButtonAddDataSetContainerProps } from './types';

import styles from './ButtonAddDataSetContainer.module.css';

function ButtonAddDataSetContainer({
	className,
}: ButtonAddDataSetContainerProps) {
	function handleClick() {
		setIsCreateDataSetModalOpenEvent(true);
	}

	return (
		<Button className={clsx(styles.root, className)} onClick={handleClick}>
			<Icon iconName={Icons.ListPlus} className={styles.icon} />
		</Button>
	);
}

export default ButtonAddDataSetContainer;
