import styles from './product-item.module.css';

import {TOTAL_SETS} from "./constants.ts";
import {ProductType} from "type/types.ts";

interface Props {
    product: ProductType;
    index: number;
}

export const PriceBlock = ({product, index}: Props) => {
    const hasOldPrice = product.old_price && index !== 0;
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

            {!index && (
                <div className={styles.kitsBlock}>
                    <span>Всего наборов:</span>
                    <p>{TOTAL_SETS}</p>
                </div>
            )}
        </div>
    );
};
