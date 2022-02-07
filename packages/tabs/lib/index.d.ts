import { FC, MouseEvent } from 'react';
export interface ITabs {
    name: string;
    path?: string;
}
export interface ITabsProps {
    /**
     *  setting className
     */
    className?: string;
    /**
     * tab data
     */
    data: ITabs[];
    /**
     * tab id
     */
    id?: string;
    /**
     * default selected Index
     */
    defaultIndex?: number;
    /**
     * is sticky: true | false
     */
    isSticky?: boolean;
    /**
     * tabs content total width, default value is screen with.
     */
    width?: string;
    /**
     * setting test id
     */
    testData?: string;
    /**
     * setting onClick callback
     */
    onClick?: (event: MouseEvent, activeIndex: number) => void;
}
export declare type TabsProps = Partial<ITabsProps>;
export declare const Tabs: FC<TabsProps>;
export default Tabs;
