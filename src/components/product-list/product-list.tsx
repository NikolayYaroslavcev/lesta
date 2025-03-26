import styles from "../product-list/product-list.module.css";
import {useEffect, useRef} from "react";
import {ProductType} from "type/types.ts";
import {useAppDispatch} from "hooks/use-dispatch.ts";
import {setFilteredCount} from "app/filter-slice.ts";
import {ProductItem} from "components/product-item/product-item.tsx";
import {ProductNavigator} from "components/product-navigator/product-navigator.tsx";


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

            {/*изображение походу можно не обсолютить, можно просто оберазать по уже*/}
            {/* так же нужно сделать отельную комопненту для spanTop и spanBottom  и пропсами предавать юрл картинки*/}

            <span className={styles.spanTop}>
                <img src="../../../public/images/shadow-top.png" alt=""/>
            </span>

            <div ref={ref} className={`${styles.productListWrap} ${styles.customScrollbar}`}>
                {filteredProducts.length ? (
                    <div className={styles.productListContainer}>
                        {filteredProducts.map((product, index) => (
                            <ProductItem key={product.id} product={product} index={index}/>
                        ))}
                    </div>
                ) : (
                    <div className={styles.emptyState}>Нет техники данной категории</div>
                )}
            </div>

            <span className={styles.spanBottom}>
                <img src="../../../public/images/shadow-bottom.png" alt=""/>
            </span>
        </>
    );
};
