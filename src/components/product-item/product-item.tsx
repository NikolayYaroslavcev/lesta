import styles from "./product-item.module.css";
import { DiscountBlock } from "./discount-block.tsx";
import { ProductImage } from "./product-image.tsx";
import { ProductTitle } from "./product-title.tsx";
import { DescriptionBlock } from "./description-block.tsx";
import { PriceBlock } from "./price-block.tsx";
import { ProductType } from "type/types.ts";

interface Props {
    product: ProductType;
    index: number;
}

export const ProductItem = ({ product, index }: Props) => {
    const { discount, image, title, premium, description } = product;
    const itemClass = index === 0 ? styles.firstItem : styles.productItem;

    return (
        <div className={itemClass}>
            {discount && <DiscountBlock discount={discount} />}
            <ProductImage imagePatch={image} title={title} />
            <div className={styles.info}>
                <ProductTitle title={title} premium={premium} />
                {index !== 0 && <DescriptionBlock description={description} />}
                <PriceBlock product={product} index={index} />
            </div>
        </div>
    );
};
