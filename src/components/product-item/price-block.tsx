import styles from './product-item.module.css';
import { ProductType } from '../../type/types.ts';

interface PriceBlockProps {
    product: ProductType;
    index: number;
}

export const PriceBlock = ({ product, index }: PriceBlockProps) => {
    const hasOldPrice = product.old_price > 0 && index !== 0;
    const priceText = `${product.price} USD`;

    return (
        <div className={styles.infoBlock}>
            {hasOldPrice ? (
                <div className={styles.oldPriceBlock}>
                    <p className={styles.oldPrice}>{product.old_price}</p>
                    <p className={styles.price}>{priceText}</p>
                </div>
            ) : (
                <p className={styles.price}>{priceText}</p>
            )}

            {index === 0 && (
                <div className={styles.kitsBlock}>
                    <span>Всего наборов:</span>
                    <p>3</p>
                </div>
            )}
        </div>
    );
};
