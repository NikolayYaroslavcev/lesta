import {useFilteredAndSortedProducts} from "hooks/use-filtered-and-sorted-products.ts";
import {ProductList} from "components/product-list/product-list.tsx";


export const Collectible = () => {
    const filteredProducts = useFilteredAndSortedProducts(false);
    return <ProductList filteredProducts={filteredProducts} />;
};
