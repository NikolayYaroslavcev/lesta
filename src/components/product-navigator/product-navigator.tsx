import {setProducts, toggleSortDirection, toggleType} from "../../app/filter-slice.ts";
import {ProductFilters} from "./product-filters/product-filters.tsx";

import data from '../../data.json';
import {RootState} from '../../app/store.ts';
import {Navigation} from './navigation/navigation.tsx';

import {useEffect} from 'react';

import styles from './product-navigator.module.css';
import {useSelector} from "react-redux";
import {VEHICLE_TYPES} from "../../constants/vehicleTypes.ts";
import {useAppDispatch} from "../../hooks/use-dispatch.ts";

export const ProductNavigator = () => {
    const dispatch = useAppDispatch();


    useEffect(() => {
        dispatch(setProducts(data?.data));
    }, []);

    const {
        selectedTypes,
        sortDirection,
        filteredCount
    } = useSelector((state: RootState) => state.filter);


    const handleTypeChange = (type: string) => {
        dispatch(toggleType(type));
    };

    const handleSort = () => {
        dispatch(toggleSortDirection());
    };

    return (
        <div className={styles.navigateWrap}>
            <div className={styles.navigateContainer}>
                <h1 className={styles.title}>Техника</h1>
                <Navigation/>
                <ProductFilters
                    vehicleTypes={VEHICLE_TYPES}
                    selectedTypes={selectedTypes}
                    handleTypeChange={handleTypeChange}
                    handleSort={handleSort}
                    sortDirection={sortDirection}
                    filteredCount={filteredCount}
                />
            </div>
        </div>
    );
};
