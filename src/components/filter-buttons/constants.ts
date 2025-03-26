import HeavyTankIcon from '../../image/icons/show/type/heavyTank.svg?react';
import MediumTankIcon from '../../image/icons/show/type/mediumTank.svg?react';
import LightTankIcon from '../../image/icons/show/type/lightTank.svg?react';
import ATSPGIcon from '../../image/icons/show/type/atSpg.svg?react';
import SPGIcon from '../../image/icons/show/type/spg.svg?react';


export const normalizeType = (type: string) => type.toLowerCase().replace('-', '');

export const typeIcons = {
    heavytank: HeavyTankIcon,
    mediumtank: MediumTankIcon,
    lighttank: LightTankIcon,
    atspg: ATSPGIcon,
    spg: SPGIcon,
};
