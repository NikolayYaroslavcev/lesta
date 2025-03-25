import { useSelector } from 'react-redux';
import { RootState } from '../app/store.ts';

export const useFilteredAndSortedProducts = (isPremium: boolean) => {
    const products = useSelector((state: RootState) => state.filter.products);
    const selectedTypes = useSelector((state: RootState) => state.filter.selectedTypes);
    const sortDirection = useSelector((state: RootState) => state.filter.sortDirection);


    let filteredProducts = products;

    if (selectedTypes.length > 0) {
        filteredProducts = filteredProducts.filter(product => selectedTypes.includes(product.vehicle_type));
    }


    if (isPremium) {
        filteredProducts = filteredProducts.filter(product => product.premium === true);
    } else {
        filteredProducts = filteredProducts.filter(product => product.premium === false);
    }

    const sortedProducts = filteredProducts.sort((a, b) => {
        return sortDirection === 'asc' ? a.price - b.price : b.price - a.price;
    });

    return sortedProducts;
};
