import React, { FC, useState } from 'react'
import styled from 'styled-components'
import theme from '@ff-dragon/react-theme'
import icons from '@ff-dragon/react-icons'

type SvgIconProps = {
    width?: string
    height?: string
}
type Tab = {
    icon: React.FunctionComponent<SvgIconProps> | string
    text: string
    path: string
    iconProps?: SvgIconProps
}

export type TabBarProps = {
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
    tabs?: Array<Tab>
    /**
     * setting classNames
     */
    classNames?: string
    /**
     * setting test id
     */
    testData?: string
    /**
     * setting default index of tabBar
     */
    defaultIndex: number
    /**
     * if you want routing to selected item path, this callback can implement.
     * const onClick = (item) => {
     *  router.replace(item.path)
     * }
     */
    // eslint-disable-next-line no-unused-vars
    onClick?: (item: Tab) => void
}

const { colors, lineHeights, fonts, fontSizes, height } = theme

const TabBarWrap = styled.div``
const TabBarContainer = styled.section`
    position: absolute;
    width: 100%;
    min-height: 100vh;
    -webkit-overflow-scrolling: touch;
    padding-bottom: 48px;
    padding-bottom: calc(48px + constant(safe-area-inset-bottom));
    padding-bottom: calc(48px + env(safe-area-inset-bottom));
`
const TabBarBarWrap = styled.section`
    position: fixed;
    width: 100%;
    left: 0;
    bottom: 0;
    display: flex;
    padding: $size-xxs + $size-xxxs 0 $size-xxs;
    height: 48px;
    font-family: ${fonts.semibold};
    font-size: ${fontSizes.size_10};
    line-height: ${lineHeights.compact};
    background-color: ${colors.white};
    text-align: center;
`

const TabBarBarTab = styled.div`
    width: 33.3%;
    cursor: pointer;
    color: ${colors.smoke};
`
const TabBarIcon = styled.div`
    height: ${height.s};
`

export const TabBar: FC<TabBarProps> = ({
    children,
    tabs,
    className,
    onClick,
    defaultIndex = 0,
    testData,
}: any) => {
    const [selectedIndex, setSelectedIndex] = useState(defaultIndex)
    const handleClick = (item, index) => {
        setSelectedIndex(index)
        onClick && onClick(item)
    }
    return (
        <TabBarWrap data-testid={testData} className={className}>
            <TabBarContainer>{children}</TabBarContainer>
            <TabBarBarWrap>
                {tabs.map((item: Tab, index) => {
                    const Icons = typeof item.icon === 'string' ? icons[item.icon] : item.icon
                    return (
                        <TabBarBarTab
                            style={selectedIndex === index ? { color: `${colors.dark}` } : {}}
                            key={index}
                            data-testid={`${testData}_${index}`}
                            onClick={() => {
                                handleClick(item, index)
                            }}
                        >
                            {index}
                            <TabBarIcon>
                                {typeof item.icon === 'string' && (
                                    <Icons {...item.iconProps}></Icons>
                                )}
                            </TabBarIcon>
                            <div>{item.text}</div>
                        </TabBarBarTab>
                    )
                })}
            </TabBarBarWrap>
        </TabBarWrap>
    )
}

export default TabBar
