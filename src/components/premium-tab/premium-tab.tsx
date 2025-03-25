import {ProductList} from "../product-list/product-list.tsx";
import {useFilteredAndSortedProducts} from "../../hooks/use-filtered-and-sorted-products.ts";


export const PremiumTab = () => {
    const filteredProducts = useFilteredAndSortedProducts(true);
    return <ProductList filteredProducts={filteredProducts} />;
};
