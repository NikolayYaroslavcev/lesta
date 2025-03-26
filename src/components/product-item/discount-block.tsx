import styles from './product-item.module.css';

interface Props {
    discount: number;
}

export const DiscountBlock = ({ discount }: Props) => {
    if (!discount) return null;
    return (
        <div className={styles.discount}>
            <span>-{discount}%</span>
        </div>
    );
};


