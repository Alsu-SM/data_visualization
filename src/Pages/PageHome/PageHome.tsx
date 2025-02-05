import clsx from 'clsx';

import AddEntryContainer from '../../Containers/AddEntryContainer';
import ButtonAddDataSetContainer from '../../Containers/ButtonAddDataSetContainer';
import DataSetListContainer from '../../Containers/DataSetListContainer';
import SheetAddDataSetContainer from '../../Containers/SheetAddDataSetContainer';
import ViewDataSetContainer from '../../Containers/ViewDataSetContainer';

import styles from './PageHome.module.css';

function PageHome() {
	return (
		<div className={clsx('page', styles.root)}>
			<DataSetListContainer />
			<ButtonAddDataSetContainer />
			<SheetAddDataSetContainer />
			<ViewDataSetContainer />
			<AddEntryContainer />
		</div>
	);
}

export default PageHome;
