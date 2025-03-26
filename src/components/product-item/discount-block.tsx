import styles from './product-item.module.css';

interface DiscountBlockProps {
    discount: number;
}

export const DiscountBlock = ({ discount }: DiscountBlockProps) => {
    if (!discount) return null;
    return (
        <div className={styles.discount}>
            <span>-{discount}%</span>
        </div>
    );
};


