import {Link} from "react-router-dom";
import styles from "./not-found-page.module.css";

export const NotFoundPage = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Ошибка 404</h1>
            <p className={styles.message}>Этой страницы не существует</p>
            <div className={styles.linkContainer}>
                <Link to="/premium" className={styles.link}>На главную</Link>
            </div>
        </div>
    );
};
