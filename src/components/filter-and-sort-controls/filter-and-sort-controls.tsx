import {FilterButton} from "../filter-buttons/filter-buttons.tsx";
import styles from "./filter-and-sort-controls.module.css";
import TogglesIcon from '../../image/icons/toggles.svg?react';
import {FilterAndSortProps} from "../../type/types.ts";


export const FilterAndSortControls = (
    {
        vehicleTypes,
        selectedTypes,
        handleTypeChange,
        handleSort,
        sortDirection,
        filteredCount,
    }: FilterAndSortProps) => (
    <div className={styles.filterWrap}>
        <p className={styles.filterLang}>Показано: {filteredCount}</p>
        <div className={styles.sortWrap}>
            <button onClick={handleSort} className={styles.sortButton}>
                Сортировать по цене:
                <TogglesIcon className={sortDirection === 'desc' ? styles.iconRotated : ''}/>
            </button>

            <div className={styles.show}>
                <p>Показать:</p>
                <div className={styles.buttonBlock}>
                    {vehicleTypes.map((type) => (
                        <FilterButton
                            key={type}
                            type={type}
                            isSelected={selectedTypes.includes(type)}
                            onClick={() => handleTypeChange(type)}
                        />
                    ))}
                </div>
            </div>
        </div>
    </div>
);
