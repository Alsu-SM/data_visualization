import { Outlet } from 'react-router-dom';
import clsx from 'clsx';

import Header from '../Components/Header';

import { AppProps } from './types';

import 'react-datepicker/dist/react-datepicker.css';
import styles from './App.module.css';

function App({ className, style }: AppProps) {
	return (
		<div className={clsx(styles.root, className)} style={style}>
			<Header />
			<Outlet />
		</div>
	);
}

export default App;
