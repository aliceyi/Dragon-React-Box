import { FC, MouseEvent } from 'react';
export interface ITabs {
    name: string;
    path?: string;
}
export interface ITabsProps {
    /**
     * className
     */
    className?: string;
    /**
     * data
     */
    data: ITabs[];
    /**
     * id
     */
    id?: string;
    /**
     * defaultIndex
     */
    defaultIndex?: number;
    /**
     * isSticky: true | false
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
     * onClick
     */
    onClick?: (event: MouseEvent, activeIndex: number) => void;
}
export declare type TabsProps = Partial<ITabsProps>;
export declare const Tabs: FC<TabsProps>;
export default Tabs;
