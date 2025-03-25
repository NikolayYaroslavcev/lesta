import {FilterAndSortControls} from "../../filter-and-sort-controls/filter-and-sort-controls.tsx";


interface ProductFiltersProps {
    vehicleTypes: string[];
    selectedTypes: string[];
    handleTypeChange: (type: string) => void;
    handleSort: () => void;
    sortDirection: string;
    filteredCount: number;
}

export const ProductFilters = (
    {
        vehicleTypes,
        selectedTypes,
        handleTypeChange,
        handleSort,
        sortDirection,
        filteredCount,
    }: ProductFiltersProps) => (
    <FilterAndSortControls
        vehicleTypes={vehicleTypes}
        selectedTypes={selectedTypes}
        handleTypeChange={handleTypeChange}
        handleSort={handleSort}
        sortDirection={sortDirection}
        filteredCount={filteredCount}
    />
);
