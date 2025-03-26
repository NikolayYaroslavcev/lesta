export interface ProductType {
    id: string;
    title: string;
    description: string;
    image: string;
    discount: number;
    price: number;
    old_price: number;
    vehicle_type: string;
    premium: boolean;
}


export interface ProductFiltersProps {
    vehicleTypes: string[];
    selectedTypes: string[];
    handleTypeChange: (type: string) => void;
    handleSort: () => void;
    sortDirection: string;
    filteredCount: number;
}


export interface TypeFilterButtonProps {
    type: string;
    isSelected: boolean;
    onClick: () => void;
}

export interface FilterAndSortProps {
    vehicleTypes: string[];
    selectedTypes: string[];
    handleTypeChange: (type: string) => void;
    handleSort: () => void;
    sortDirection: string;
    filteredCount: number;
}
