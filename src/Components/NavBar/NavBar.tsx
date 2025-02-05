import { useMemo, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import clsx from 'clsx';

import useOnClickOutside from '../../Shared/useOnClickOutside';
import { scrollIntoView } from '../../Utils/scrollIntoView';

import { NavBarProps, NavigationItem } from './types';

import styles from './NavBar.module.css';

function NavBar({ navigationItems, className, style }: NavBarProps) {
	const [isMenuShown, setIsMenuShown] = useState<boolean>(false);
	const menuRef = useRef<HTMLDivElement | null>(null);
	const location = useLocation();
	function handleLinkClick(path: string) {
		scrollIntoView(path);
	}
	function handleToggleMenu() {
		setIsMenuShown(!isMenuShown);
	}
	function handleCloseMenu() {
		setIsMenuShown(false);
	}

	useOnClickOutside(menuRef, handleCloseMenu);

	const items = useMemo(
		() =>
			navigationItems.map((navigationItem: NavigationItem) => {
				const isItemActive: boolean =
					location.hash === `#${navigationItem.href}` ||
					(location.hash === '' && navigationItem.key === 'intro');
				console.log(isItemActive, navigationItem.key);
				function handleClick() {
					handleLinkClick(navigationItem.key);
				}
				return (
					<button
						key={navigationItem.key}
						className={clsx(styles.link, {
							[styles.link_active]: isItemActive,
						})}
						onClick={handleClick}
					>
						{navigationItem.icon && (
							<div className={styles.nav_icon}>{navigationItem.icon}</div>
						)}
						<div className={styles.nav_label}>{navigationItem.displayName}</div>
					</button>
				);
			}),
		[navigationItems, location.hash],
	);

	return (
		<div
			className={clsx(styles.root, className, {
				[styles.menu__open]: isMenuShown,
			})}
			style={style}
			ref={menuRef}
		>
			<button className={styles.burger_button} onClick={handleToggleMenu}>
				<div className={styles.burger_icon}>
					<span
						className={clsx(
							styles.menu_toggle_bar,
							styles.menu_toggle_bar__top,
						)}
					></span>
					<span
						className={clsx(
							styles.menu_toggle_bar,
							styles.menu_toggle_bar__middle,
						)}
					></span>
					<span
						className={clsx(
							styles.menu_toggle_bar,
							styles.menu_toggle_bar__bottom,
						)}
					></span>
				</div>
			</button>
			<div className={styles.navigation}>{items}</div>
		</div>
	);
}

export default NavBar;
