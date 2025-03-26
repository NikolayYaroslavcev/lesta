import styles from 'components/product-item/product-item.module.css';

import {CURRENCY, TOTAL_SETS} from "./constants.ts";
import {ProductType} from "type/types.ts";

interface Props {
    product: ProductType;
    index: number;
}

export const PriceBlock = ({product, index}: Props) => {
    const {old_price, price} = product;
    const isOldPriceVisible = old_price && old_price !== price && index;
    const priceText = `${price} ${CURRENCY}`;

    return (
        <div className={styles.infoBlock}>
            {isOldPriceVisible ? (
                <div className={styles.oldPriceBlock}>
                    <p className={styles.oldPrice}>{product.old_price} {CURRENCY}</p>
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
