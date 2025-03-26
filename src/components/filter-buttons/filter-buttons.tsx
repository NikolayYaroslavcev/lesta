import styles from './filter-buttons.module.css';

import ToggleOff from '../../image/icons/show/toggleoff.svg?react';
import ToggleOn from '../../image/icons/show/toggleon.svg?react';
import {TypeFilterButtonProps} from "../../type/types.ts";
import {normalizeType, typeIcons} from "./constants.ts";


export const FilterButton = ({type, isSelected, onClick}: TypeFilterButtonProps) => {
    const normalizedType = normalizeType(type);
    const TypeIcon = typeIcons[normalizedType];
    const ToggleIcon = isSelected ? ToggleOn : ToggleOff;

    return (
        <button className={`${styles.buttonStyle} ${isSelected ? styles.selected : ''}`} onClick={onClick}>
            <div className={styles.iconWrapper}>
                <ToggleIcon className={styles.toggleIcon}/>
                {TypeIcon && <TypeIcon className={styles.typeIcon}/>}
            </div>
        </button>
    );
};

