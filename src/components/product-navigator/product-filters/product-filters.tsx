import {ProductFiltersProps} from "type/types.ts";
import {FilterAndSortControls} from "components/filter-and-sort-controls/filter-and-sort-controls.tsx";


export const ProductFilters = ({ ...props }: ProductFiltersProps) => (
    <FilterAndSortControls {...props} />
);
