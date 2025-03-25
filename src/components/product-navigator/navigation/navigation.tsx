import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {toggleCollectible, togglePremium} from "../../../app/filter-slice.ts";

import styles from './Navigate.module.css';


export const Navigation = () => {
    const dispatch = useDispatch();

    const handlePremiumClick = () => {
        dispatch(togglePremium());
        dispatch(toggleCollectible(false));
    };

    const handleCollectibleClick = () => {
        dispatch(toggleCollectible());
        dispatch(togglePremium(false));
    };

    return (
        <nav className={styles.nav}>
            <ul className={styles.navList}>
                <li className={styles.navItem}>
                    <NavLink
                        to="/premium"
                        className={({ isActive }) =>
                            isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                        }
                        onClick={handlePremiumClick}
                    >
                        Премиальная
                    </NavLink>
                </li>
                <li className={styles.navItem}>
                    <NavLink
                        to="/collectible"
                        className={({ isActive }) =>
                            isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                        }
                        onClick={handleCollectibleClick}
                    >
                        Коллекционная
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};
