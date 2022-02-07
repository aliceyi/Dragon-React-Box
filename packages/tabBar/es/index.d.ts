import React, { FC } from 'react';
declare type SvgIconProps = {
    width?: string;
    height?: string;
};
declare type Tab = {
    icon: React.FunctionComponent<SvgIconProps> | string;
    text: string;
    path: string;
    iconProps?: SvgIconProps;
};
export declare type TabBarProps = {
    /**
     * setting tab bar data
     * {
     *  icon: React.FunctionComponent<SvgIconProps> | string
     *  text: string
     *  path: string
     *  iconProps?: SvgIconProps
     *  defaultIndex: number
     * }
     */
    tabs?: Array<Tab>;
    /**
     * setting classNames
     */
    classNames?: string;
    /**
     * setting test id
     */
    testData?: string;
    /**
     * setting default index of tabBar
     */
    defaultIndex: number;
    /**
     * if you want routing to selected item path, this callback can implement.
     * const onClick = (item) => {
     *  router.replace(item.path)
     * }
     */
    onClick?: (item: Tab) => void;
};
export declare const TabBar: FC<TabBarProps>;
export default TabBar;
