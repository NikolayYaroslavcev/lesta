import styles from "./filter-and-sort-controls.module.css";
import TogglesArrayIcon from "../../image/icons/tooglearrow.svg?react";
import TogglesBlockIcon from "../../image/icons/togglesblock.svg?react";
import {FilterAndSortProps} from "type/types.ts";
import {FilterButton} from "components/filter-buttons/filter-buttons.tsx";

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
                <span className={styles.toggleBlockIcon}>
                    <TogglesBlockIcon/>
                    <TogglesArrayIcon
                        className={`${styles.toggleArrayIcon} ${sortDirection === "desc" ? styles.iconRotated : ""}`}
                    />
                </span>
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
