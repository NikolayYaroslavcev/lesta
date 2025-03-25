import styles from './filter-buttons.module.css';
import HeavyTankIcon from '../../image/icons/show/type/heavyTank.svg?react';
import MediumTankIcon from '../../image/icons/show/type/mediumTank.svg?react';
import LightTankIcon from '../../image/icons/show/type/lightTank.svg?react';
import ATSPGIcon from '../../image/icons/show/type/atSpg.svg?react';
import SPGIcon from '../../image/icons/show/type/spg.svg?react';
import ToggleOff from '../../image/icons/show/toggleoff.svg?react';
import ToggleOn from '../../image/icons/show/toggleon.svg?react';

interface TypeFilterButtonProps {
    type: string;
    isSelected: boolean;
    onClick: () => void;
}

const normalizeType = (type: string) => type.toLowerCase().replace('-', '');

const typeIcons = {
    heavytank: HeavyTankIcon,
    mediumtank: MediumTankIcon,
    lighttank: LightTankIcon,
    atspg: ATSPGIcon,
    spg: SPGIcon,
};

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

