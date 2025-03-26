import {ProductList} from "../../../components/product-list/product-list.tsx";
import {useFilteredAndSortedProducts} from "../../../hooks/use-filtered-and-sorted-products.ts";



export const Premium = () => {
    const filteredProducts = useFilteredAndSortedProducts(true);
    return <ProductList filteredProducts={filteredProducts} />;
};
