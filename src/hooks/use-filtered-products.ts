import { useSelector } from 'react-redux';
import { RootState } from '../app/store.ts';

export const useFilteredProducts = () => {
    const { selectedTypes, sortDirection, products, showPremium, showCollectible } = useSelector(
        (state: RootState) => state.filter
    );


    let filteredProducts = products;

    if (showPremium && showCollectible) {
        filteredProducts = filteredProducts.filter(product => product.premium === true || product.premium === false);
    } else if (showPremium) {
        filteredProducts = filteredProducts.filter(product => product.premium === true);
    } else if (showCollectible) {
        filteredProducts = filteredProducts.filter(product => product.premium === false);
    }


    filteredProducts = filteredProducts.filter((product) => selectedTypes.includes(product.vehicle_type));

    filteredProducts = filteredProducts.sort((a, b) => {
        return sortDirection === 'asc' ? a.price - b.price : b.price - a.price;
    });

    return filteredProducts;
};
