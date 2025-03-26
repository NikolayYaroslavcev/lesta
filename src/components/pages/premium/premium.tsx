import {useFilteredAndSortedProducts} from "hooks/use-filtered-and-sorted-products.ts";
import {ProductList} from "components/product-list/product-list.tsx";


export const Premium = () => {
    const filteredProducts = useFilteredAndSortedProducts(true);
    return <ProductList filteredProducts={filteredProducts} />;
};
