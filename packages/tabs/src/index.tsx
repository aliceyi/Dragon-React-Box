import React, {
    FC,
    MouseEvent,
    MutableRefObject,
    useEffect,
    useRef,
    useState,
    useCallback,
} from 'react'
import smoothscroll from 'smoothscroll-polyfill'
import styled from 'styled-components'
import theme from '@ff-dragon/react-theme'

export interface ITabs {
    name: string
    path?: string
}
export interface ITabsProps {
    /**
     *  setting className
     */
    className?: string
    /**
     * tab data
     */
    data: ITabs[]
    /**
     * tab id
     */
    id?: string
    /**
     * default selected Index
     */
    defaultIndex?: number
    /**
     * is sticky: true | false
     */
    isSticky?: boolean
    /**
     * tabs content total width, default value is screen with.
     */
    width?: string
    /**
     * setting test id
     */
    testData?: string
    /**
     * setting onClick callback
     */
    // eslint-disable-next-line no-unused-vars
    onClick?: (event: MouseEvent, activeIndex: number) => void
}

export type TabsProps = Partial<ITabsProps>

const { colors, space, fonts, fontSizes } = theme

const TabContainer = styled.div`
    ${(props) => {
        const { isSticky } = props
        if (isSticky) {
            return `
                position: sticky;
                top: -2px;
            `
        }
    }}
    width: ${({ width }) => {
        return `${width}`
    }};
    background-color: ${colors.white};
    overflow: hidden;
    z-index: 2;
    padding: ${space.s} 0;
`

const tabStyleByLTabLength = (params) => {
    if (params.length > 3) {
        return `
            scroll-behavior: smooth;
            overflow-x: auto;
            &::-webkit-scrollbar {
                display: none;
            }
            &>div:nth-child(2) {
                margin-left: ${space.m};
            }
            & > div:nth-last-child(1) {
                margin-right: ${space.m};
            }
        `
    } else {
        return `
            display: flex;
            justify-content: space-around;
        `
    }
}

const TabWrap = styled.div`
    align-items: start;
    white-space: nowrap;
    position: relative;
    height: 28px;
    overflow: hidden;
    ${(props) => {
        const { isScroll } = props
        let tabStyle = tabStyleByLTabLength(props.data)
        if (isScroll) {
            tabStyle += `overflow-x: auto;`
        } else {
            tabStyle += `overflow: hidden;`
        }
        return tabStyle
    }}
`

const Pointer = styled.div`
    height: 4px;
    width: 60px;
    background: ${colors.dark};
    transition-property: right, left, width;
    -webkit-transition-property: right, left, width;
    position: absolute;
    left: 0;
    bottom: 0px;
`

const TabItem = styled.div`
    display: inline-block;
    text-align: center;
    font-size: ${fontSizes.size_16};
    white-space: nowrap;
    margin-left: ${space.l};
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    font-family: ${fonts.semibold};
    &:nth-last-child(1) {
        margin-right: ${space.l};
    }
`
type ITabPosition = {
    width: number
    left: number
    scrollLeft: number
}

export const Tabs: FC<TabsProps> = ({
    isSticky = false,
    data = [],
    id = 'ffTabs',
    width = '100%',
    onClick,
    defaultIndex = 0,
    testData,
    ...props
}: TabsProps) => {
    const tabsEl: MutableRefObject<HTMLDivElement | null> = useRef(null)
    const tabContainerRef: MutableRefObject<HTMLDivElement | null> = useRef(null)
    const [pointStyle, setPointStyle] = useState({})
    const isScroll: MutableRefObject<boolean> = useRef(true)
    const [activeIndex, setActiveIndex] = useState(defaultIndex)

    const getTabPosition = (tabElement: HTMLElement): ITabPosition => {
        const { clientWidth: contextWidth, offsetLeft } = tabElement as HTMLDivElement
        const { clientWidth: contextWrapWidth } = tabContainerRef.current as HTMLDivElement
        const left = offsetLeft
        const screenMidlineLeft = contextWrapWidth / 2
        const scrollLeft = left + contextWidth / 2 - screenMidlineLeft

        return {
            width: contextWidth,
            left,
            scrollLeft,
        }
    }

    const setPointerPosition = (element: HTMLElement, isInit?: boolean) => {
        const { left, width } = getTabPosition(element)
        setPointStyle({
            ...pointStyle,
            left,
            width,
            transitionDuration: isInit ? '' : '0.4s',
        })
    }

    const isMore = (): boolean => {
        return data.length > 3
    }

    const setTabsPosition = (element: HTMLElement) => {
        const { scrollLeft } = getTabPosition(element)
        const dom = tabsEl?.current as HTMLDivElement
        // dom?.scroll({ left: scrollLeft, behavior: 'smooth' })
        dom.scrollLeft = scrollLeft
    }

    const setPosition = (element: HTMLElement, isInit?: boolean) => {
        setPointerPosition(element, isInit)
        isMore() && setTabsPosition(element)
    }

    const handleClick = (
        event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
        index: number
    ) => {
        setPosition(event.currentTarget)
        setActiveIndex(index)
        onClick && onClick(event, index)
    }
    const activeTab = () => {
        const firstDom: HTMLElement | null = document.getElementById(`${id}_${defaultIndex}`)
        firstDom && setPosition(firstDom, true)
    }

    useEffect(() => {
        smoothscroll.polyfill()
    }, [])

    useEffect(() => {
        activeTab()
    }, [])

    let resetTabTimer: null | ReturnType<typeof setTimeout> = null

    const resetTabScroll = () => {
        if (!isScroll.current) isScroll.current = true
    }

    const isScrollBottom = () => {
        resetTabTimer && clearTimeout(resetTabTimer)

        if (isScroll.current) isScroll.current = false

        resetTabTimer = setTimeout(resetTabScroll, 100)
    }

    const _handleScroll = useCallback(() => {
        isScrollBottom()
    }, [])

    /**
     * In order to fix the sticky content flashing problem, when the container has scroll bars.
     * refer issue
     * https://developers.weixin.qq.com/community/develop/doc/0006e4acfacfc80fc68a6208456000
     */
    useEffect(() => {
        if (isMore()) {
            window.addEventListener('scroll', _handleScroll)
            return () => window.removeEventListener('scroll', _handleScroll)
        }
    }, [_handleScroll])

    return (
        <TabContainer
            data-testid={testData}
            ref={tabContainerRef}
            isSticky={isSticky}
            width={width}
            {...props}
        >
            <TabWrap data={data} ref={tabsEl} isScroll={isScroll.current}>
                <Pointer style={pointStyle} />
                {data.map((item, index) => {
                    return (
                        <TabItem
                            data-active={activeIndex === index}
                            key={index}
                            id={`${id}_${index}`}
                            data-index={index}
                            data-tab-id={id}
                            onClick={(e) => {
                                handleClick(e, index)
                            }}
                        >
                            {item.name}
                        </TabItem>
                    )
                })}
            </TabWrap>
        </TabContainer>
    )
}

export default Tabs
