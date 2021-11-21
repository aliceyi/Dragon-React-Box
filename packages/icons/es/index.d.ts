import { FC } from 'react';
import { default as IconEdit } from './IconEdit';
import { default as IconArrowRight } from './IconArrowRight';
import { default as IconArrowLeft } from './IconArrowLeft';
import { default as IconArrowUp } from './IconArrowUp';
import { default as IconPlus } from './IconPlus';
import { default as IconCube } from './IconCube';
import { default as IconGuide } from './IconGuide';
import { default as IconMoney } from './IconMoney';
import { default as IconCommission } from './IconCommission';
import { default as IconClose } from './IconClose';
import { default as IconConfirm } from './IconConfirm';
import { default as IconTime } from './IconTime';
import { default as IconHelp } from './IconHelp';
import { default as IconGalaxy } from './IconGalaxy';
import { default as IconWarning } from './IconWarning';
import { default as IconTick } from './IconTick';
import { default as IconLoading } from './IconLoading';
import { default as IconF } from './IconF';
import { default as IconRadioCheck } from './IconRadioCheck';
import { default as IconRadioUncheck } from './IconRadioUncheck';
export interface Props {
    /**
     * Set Icon type to display
     */
    type?: 'IconEdit' | 'IconArrowRight' | 'IconArrowLeft' | 'IconArrowUp' | 'IconArrowDown' | 'IconPlus' | 'IconCube' | 'IconGuide' | 'IconMoney' | 'IconCommission' | 'IconClose' | 'IconConfirm' | 'IconTime' | 'IconHelp' | 'IconGalaxy' | 'IconWarning' | 'IconTick' | 'IconLoading' | 'IconF' | 'IconRadioCheck' | 'IconRadioUncheck';
    /**
     * Like the original type attribute of the SVG
     */
    className?: string;
}
declare const IconItems: {
    IconEdit: typeof IconEdit;
    IconArrowRight: typeof IconArrowRight;
    IconArrowLeft: typeof IconArrowLeft;
    IconArrowUp: typeof IconArrowUp;
    IconArrowDown: typeof IconArrowRight;
    IconPlus: typeof IconPlus;
    IconCube: typeof IconCube;
    IconGuide: typeof IconGuide;
    IconMoney: typeof IconMoney;
    IconCommission: typeof IconCommission;
    IconClose: typeof IconClose;
    IconConfirm: typeof IconConfirm;
    IconTime: typeof IconTime;
    IconHelp: typeof IconHelp;
    IconGalaxy: typeof IconGalaxy;
    IconWarning: typeof IconWarning;
    IconTick: typeof IconTick;
    IconLoading: typeof IconLoading;
    IconF: typeof IconF;
    IconRadioCheck: typeof IconRadioCheck;
    IconRadioUncheck: typeof IconRadioUncheck;
};
export default IconItems;
export declare const Icons: FC<Props>;
