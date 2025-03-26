import {NavLink} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {toggleCollectible, togglePremium} from "../../../app/filter-slice.ts";
import styles from './Navigate.module.css';
import {navItems} from "./constants.ts";

export const Navigation = () => {
    const dispatch = useDispatch();

    const changeFilterState = (params) => {
        const {isPremium, isCollectible} = params;
        dispatch(togglePremium(isPremium));
        dispatch(toggleCollectible(isCollectible));
    };


    return (
        <nav className={styles.nav}>
            <ul className={styles.navList}>
                {navItems.map((item) => (
                    <li key={item.to} className={styles.navItem}>
                        <NavLink
                            to={item.to}
                            className={({isActive}) =>
                                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                            }
                            onClick={() => changeFilterState(item.params)}
                        >
                            {item.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
