import styles from 'components/product-item/product-item.module.css';
import {Link} from "react-router-dom";

interface Props {
    title: string;
    premium: boolean;
}

export const ProductTitle = ({ title, premium }: Props) => {
    const typeText = premium ? 'Ultimate' : 'Standard';

    return (
        <Link to="#" className={styles.titleBlock}>
            <h2 className={styles.title}>{title}</h2>
            <span className={styles.separator}>-</span>
            <p className={styles.type}>{typeText}</p>
        </Link>
    );
};


