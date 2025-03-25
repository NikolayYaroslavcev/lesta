import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    selectedTypes: [],
    sortDirection: 'asc',
    filteredCount: 0,
    products: [],
    showPremium: false,
    showCollectible: false,
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        },
        toggleType: (state, action) => {
            const type = action.payload;
            if (state.selectedTypes.includes(type)) {
                state.selectedTypes = state.selectedTypes.filter(t => t !== type);
            } else {
                state.selectedTypes.push(type);
            }
        },
        toggleSortDirection: (state) => {
            state.sortDirection = state.sortDirection === 'asc' ? 'desc' : 'asc';
        },
        setFilteredCount: (state, action) => {
            state.filteredCount = action.payload;
        },
        togglePremium: (state) => {
            state.showPremium = !state.showPremium;
        },
        toggleCollectible: (state) => {
            state.showCollectible = !state.showCollectible;
        }
    },
});

export const { setProducts, toggleType, toggleSortDirection, setFilteredCount, togglePremium, toggleCollectible } = filterSlice.actions;
export default filterSlice.reducer;
