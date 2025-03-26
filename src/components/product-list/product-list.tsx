import {ProductItem} from "../product-item/product-item.tsx";
import {ProductNavigator} from "../product-navigator/product-navigator.tsx";
import styles from "../product-list/product-list.module.css";
import {useEffect, useRef} from "react";
import {ProductType} from "../../type/types.ts";
import {useAppDispatch} from "../../hooks/use-dispatch.ts";
import {setFilteredCount} from "../../app/filter-slice.ts";

interface ProductListProps {
    filteredProducts: ProductType[];
}

export const ProductList = ({filteredProducts}: ProductListProps) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setFilteredCount(filteredProducts.length));
    }, [filteredProducts]);

    return (
        <>
            <ProductNavigator/>

            {/*///вынсти тени в отдельный комонент и передать пропсом url*/}

            <span className={styles.spanTop}>
                    <img src="../../../public/images/shadow-top.png" alt=""/>
                </span>
            <div ref={ref} className={`${styles.productListWrap} custom-scrollbar`}>

                {filteredProducts.length ? (
                    <div className={styles.productListContainer}>
                        {filteredProducts.map((product, index) => (
                            <ProductItem product={product} index={index} key={product.id}/>
                        ))}
                    </div>
                ) : (
                    <div className={styles.emptyState}>Ничего нет</div>
                )}
            </div>
            <span className={styles.spanBottom}>
                    <img src="../../../public/images/shadow-bottom.png" alt=""/>
                </span>
        </>
    );
};
