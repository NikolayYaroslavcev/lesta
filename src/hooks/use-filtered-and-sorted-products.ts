import {useAppSelector} from "../hooks/use-selector.ts";
import {RootState} from "../app/store.ts";

export const useFilteredAndSortedProducts = (isPremium: boolean) => {
    const { selectedTypes, sortDirection, products} = useAppSelector(
        (state: RootState) => state.filter
    );



    let filteredProducts = products;

    if (selectedTypes.length) {
        filteredProducts = filteredProducts.filter(product => selectedTypes.includes(product.vehicle_type));
    }


    if (isPremium) {
        filteredProducts = filteredProducts.filter(product => product.premium );
    } else {
        filteredProducts = filteredProducts.filter(product => !product.premium);
    }

    const sortedProducts = filteredProducts.sort((a, b) => {
        return sortDirection === 'asc' ? a.price - b.price : b.price - a.price;
    });

    return sortedProducts;
};
