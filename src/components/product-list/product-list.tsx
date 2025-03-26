import {useEffect, useRef} from "react";
import {ProductType} from "type/types.ts";
import {useAppDispatch} from "hooks/use-dispatch.ts";
import {setFilteredCount} from "app/filter-slice.ts";
import {ProductItem} from "components/product-item/product-item.tsx";
import {ProductNavigator} from "components/product-navigator/product-navigator.tsx";
import {ImageWrapper} from "./ImageWrapper.tsx";

import styles from "components/product-list/product-list.module.css";

interface Props {
    filteredProducts: ProductType[];
}

export const ProductList = ({filteredProducts}: Props) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setFilteredCount(filteredProducts.length));
    }, [filteredProducts]);

    return (
        <>
            <ProductNavigator/>

            <div ref={ref} className={styles.productListWrap}>
                <span className={styles.spanTop}>
                     <ImageWrapper imageUrl="../../../public/images/shadow-top.png" altText="Shadow Top"/>
                </span>

                {filteredProducts.length ? (
                    <div className={`${styles.productListContainer} ${styles.customScrollbar}`}>
                        {filteredProducts.map((product, index) => (
                            <ProductItem key={product.id} product={product} index={index}/>
                        ))}
                    </div>
                ) : (
                    <div className={styles.emptyState}>Нет техники данной категории</div>
                )}

                <span className={styles.spanBottom}>
                     <ImageWrapper imageUrl="../../../public/images/shadow-bottom.png" altText="Shadow Bottom"/>
                </span>
            </div>
        </>
    );
};
