import {ProductList} from "../product-list/product-list.tsx";
import {useFilteredAndSortedProducts} from "../../hooks/use-filtered-and-sorted-products.ts";



export const CollectibleTab = () => {
    const filteredProducts = useFilteredAndSortedProducts(false);
    return <ProductList filteredProducts={filteredProducts} />;
};
