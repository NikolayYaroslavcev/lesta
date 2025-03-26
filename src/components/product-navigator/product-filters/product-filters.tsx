import { FilterAndSortControls } from "../../filter-and-sort-controls/filter-and-sort-controls.tsx";
import { ProductFiltersProps } from "../../../type/types.ts";

export const ProductFilters = ({ ...props }: ProductFiltersProps) => (
    <FilterAndSortControls {...props} />
);
