import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'
import theme from '@dragon/react-theme'
import icons from '@dragon/react-icons'
import styled from 'styled-components'

/**
 * design standard
 * icon size : L M S
 * font size : L M S
 * icon space : L M S
 */
export interface BaseButtonProps {
    /**
     * setting button style
     */
    className?: string
    /**
     * Is this the principal call to action on the page?
     */
    btnType?: 'primary' | 'default' | 'link' | 'icon'
    /**
     * How large should the button be?
     */
    size?: 'small' | 'medium' | 'large'
    /**
     * button children node
     */
    children: React.ReactNode
    /**
     * when btnType is a link, href have to value
     */
    href?: string
    /**
     * setting test id
     */
    testData?: string
    /**
     * setting disabled
     */
    disabled?: boolean
    /**
     * setting button icon alignment
     */
    iconPosition?: 'left' | 'right'
    /**
     * setting button width
     */
    width?: string
    /**
     * setting button icon
     */
    icon?: string
    /**
     * setting svg icon's width
     */
    iconWidth?: string
    /**
     * setting svg icon's height
     */
    iconHeight?: string
    /**
     * setting button click callback
     */
    onClick?: () => void
}

type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

function LightenDarkenColor(col, amt) {
    let usePound = false

    if (col[0] == '#') {
        col = col.slice(1)
        usePound = true
    }

    const num = parseInt(col, 16)

    let r = (num >> 16) + amt

    if (r > 255) r = 255
    else if (r < 0) r = 0

    let b = ((num >> 8) & 0x00ff) + amt

    if (b > 255) b = 255
    else if (b < 0) b = 0

    let g = (num & 0x0000ff) + amt

    if (g > 255) g = 255
    else if (g < 0) g = 0

    return (usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16)
}

/**
 * defined styled element report warning error
 * resolution
 * https://github.com/styled-components/styled-components/issues/3117
 */

const { colors, space, fontSizes, fonts, height, width } = theme

const buttonBaseStyle = {
    primary: {
        color: colors.white,
        backgroundColor: colors.dark,
        borderColor: colors.dark,
    },
    disabled: {
        color: colors.white,
        backgroundColor: colors.grey,
        borderColor: colors.grey,
    },
    secondary: {
        color: colors.dark,
        backgroundColor: colors.white,
        borderColor: colors.dark,
    },
    link: {
        color: colors.dark,
        backgroundColor: 'transparent',
        borderColor: 'transparent',
    },
    heights: {
        small: height.s,
        medium: height.m,
        large: height.l,
    },
    iconWidths: {
        small: width.m,
        medium: width.m,
        large: width.l,
    },
    iconHeights: {
        small: height.l,
        medium: height.l,
        large: height.lp,
    },
    iconFontSize: {
        small: fontSizes.xxs,
        medium: fontSizes.xxs,
        large: fontSizes.xs,
    },
    horizontalSpace: {
        small: space.xsp,
        medium: space.xsp,
        large: space.xsp,
    },
    verticalSpace: {
        small: space.xxxs,
        medium: space.xxxs,
        large: space.xxs,
    },
    linkHorizontalSpace: {
        small: space.xxs,
        medium: space.xs,
        large: space.xsp,
    },
    fontSize: {
        small: fontSizes.xs,
        medium: '0.9375rem',
        large: '0.9375rem',
    },
}

const buttonStyle = (params) => {
    return `
        color: ${params.color};
        background-color: ${params.backgroundColor};
        border: 1px solid ${params.borderColor};

        &:hover {
            color: ${params.color};
            background: ${LightenDarkenColor(params.backgroundColor, 20)};
            border-color: ${LightenDarkenColor(params.borderColor, 10)};
        }

        &:focus,
        &.focus {
            color: ${params.color};
            background: ${LightenDarkenColor(params.backgroundColor, 20)};
            border-color: ${LightenDarkenColor(params.borderColor, 10)};
        }

        &:disabled,
        &.disabled {
            color: ${params.color};
            background: ${params.backgroundColor};
            border-color: ${params.borderColor};
        }
    `
}

// const childStyle = (params) => {
//     if (params.align === 'right') {
//         return `
//             float: right;
//             margin-left: ${params.space}
//         `
//     }
// }

const DefaultBtn = styled.button`
    display: flex;
    justify-content: center;
    position: relative;
    padding: 0 ${space.s};
    height: ${(props) => {
        const { size } = props
        return buttonBaseStyle.heights[size]
    }};
    font-family: ${fonts.regular};
    font-size: ${(props) => buttonBaseStyle.fontSize[props.size]};
    line-height: ${(props) => {
        const { size } = props
        return buttonBaseStyle.heights[size]
    }};
    outline: none;
    overflow: hidden;
    cursor: pointer;
    width: ${(props) => props.width};
    ${(props) => {
        let btnStyle = buttonStyle(buttonBaseStyle.secondary)
        const { btnType, disabled } = props
        if (btnType !== 'default') {
            btnStyle = buttonStyle(buttonBaseStyle[btnType])
        }
        if (disabled) {
            btnStyle = buttonStyle(buttonBaseStyle.disabled)
        }
        return btnStyle
    }}
    & span {
        width: 100%;
    }
`

const LinkBtn = styled.a`
    ${(props) => {
        let btnStyle = buttonStyle(buttonBaseStyle.link)
        const { disabled } = props

        if (disabled) {
            btnStyle = buttonStyle(buttonBaseStyle.disabled)
        }
        return btnStyle
    }}
    width: ${(props) => props.width};
    display: inline-block;
`
const IconBtn = styled.div`
    ${(props) => {
        let btnStyle = buttonStyle(buttonBaseStyle.link)
        const { disabled } = props

        if (disabled) {
            btnStyle = buttonStyle(buttonBaseStyle.disabled)
        }
        return btnStyle
    }}
    width: ${(props) => buttonBaseStyle.iconWidths[props.size]};
    border: 0;
    height: ${(props) => buttonBaseStyle.iconHeights[props.size]};
    text-align: center;
`
const Children = styled.div`
    & > svg {
        ${(props) => {
            const { iconPosition, size, btnType } = props
            if (iconPosition === 'right' && btnType !== 'icon') {
                if (btnType === 'link') {
                    return `
                        float: ${iconPosition};
                        height: ${buttonBaseStyle.heights[size]};
                        margin-left:${buttonBaseStyle.linkHorizontalSpace[size]};
                    `
                }
                return `
                        float: ${iconPosition};
                        height: ${buttonBaseStyle.heights[size]};
                        margin-left:${buttonBaseStyle.horizontalSpace[size]};
                    `
            }
            if (iconPosition === 'left' && btnType !== 'icon') {
                if (btnType === 'link') {
                    return `
                        float: ${iconPosition};
                        height: ${buttonBaseStyle.heights[size]};
                        margin-right:${buttonBaseStyle.linkHorizontalSpace[size]};
                    `
                }
                return `
                        float: ${iconPosition};
                        height: ${buttonBaseStyle.heights[size]};
                        margin-right:${buttonBaseStyle.horizontalSpace[size]};
                    `
            }
        }}
    }
    & > span {
        vertical-align: middle;
        ${(props) => {
            const { btnType, size } = props
            if (btnType === 'icon') {
                return `
                    display: block;
                    font-size: ${buttonBaseStyle.iconFontSize[size]}
                `
            }
        }}
    }
`

/**
 * Primary UI component for user interaction
 */
export const Button: FC<ButtonProps> = ({
    btnType = 'default',
    children,
    size = 'medium',
    href,
    testData,
    disabled = false,
    className,
    iconPosition,
    width = '180px',
    onClick,
    icon,
    iconWidth = '24px',
    iconHeight = '24px',
}) => {
    const handleClick = () => {
        onClick && onClick()
    }
    const Icons = icons[icon]
    if (btnType === 'link' && href) {
        return (
            <LinkBtn
                href={href}
                className={className}
                data-testid={testData}
                btnType={btnType}
                disabled={disabled}
                size={size}
                width={width}
            >
                <Children iconPosition={iconPosition} size={size} btnType={btnType}>
                    {Icons && <Icons width={iconWidth} height={iconHeight}></Icons>}
                    <span>{children}</span>
                </Children>
            </LinkBtn>
        )
    } else if (btnType === 'icon') {
        return (
            <IconBtn btnType={btnType} size={size}>
                <Children iconPosition={iconPosition} size={size} btnType={btnType}>
                    {Icons && <Icons width={iconWidth} height={iconHeight}></Icons>}
                    <span>{children}</span>
                </Children>
            </IconBtn>
        )
    } else {
        return (
            <div>
                <DefaultBtn
                    className={className}
                    data-testid={testData}
                    btnType={btnType}
                    disabled={disabled}
                    size={size}
                    width={width}
                    onClick={handleClick}
                >
                    <Children iconPosition={iconPosition} size={size} btnType={btnType}>
                        {Icons && <Icons width={iconWidth} height={iconHeight}></Icons>}
                        <span>{children}</span>
                    </Children>
                </DefaultBtn>
            </div>
        )
    }
}

export default Button
