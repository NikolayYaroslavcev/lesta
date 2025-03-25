import {Outlet} from 'react-router-dom';
import styles from './App.module.css';


export const App = () => {
    return (
        <div className={styles.wrapper}>
            <header></header>
            <main className={styles.main}>
                <div className={styles.container}>
                    <Outlet/>
                </div>
            </main>
            <footer></footer>
        </div>
    );
}
