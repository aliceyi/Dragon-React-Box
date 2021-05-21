import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes, MouseEvent } from 'react'
import theme from '@dragon/react-theme'
import icons from '@dragon/react-icons'
import styled from 'styled-components'

/**
 * design standard
 * icon size : L M S
 * font size : L M S
 * icon space : L M S
 *
 *
 * what is the style when button is link button.
 */
type buttonEvent = (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void
type divEvent = (event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => void
type anchorEvent = (event: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => void
export interface BaseButtonProps {
    /**
     * Like the original type attribute of the button
     */
    type?: 'button' | 'reset' | 'submit'
    /**
     * setting button style
     */
    className?: string
    /**
     * Is this the principal call to action on the page?
     */
    btnType?: 'button' | 'text' | 'icon'
    /**
     * setting button priority
     */
    modifier: 'primary' | 'default'
    /**
     * How large should the button be?
     */
    size?: 'small' | 'medium' | 'large'
    /**
     * button children node
     */
    children: React.ReactNode
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
    // eslint-disable-next-line no-unused-vars
    onClick?: buttonEvent | divEvent | anchorEvent
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
    button: {
        heights: {
            small: height.m,
            medium: height.l,
            large: height.lp,
        },
        icons: {
            small: width.s,
            medium: width.sp,
            large: width.sp,
        },
        space: {
            small: space.xsp,
            medium: space.xsp,
            large: space.xsp,
        },
        fontSize: {
            small: fontSizes.xs,
            medium: fontSizes.sp,
            large: fontSizes.sp,
        },
    },
    textButton: {
        link: {
            color: colors.dark,
            backgroundColor: 'transparent',
            borderColor: 'transparent',
        },
        heights: {
            small: height.m,
            medium: height.l,
            large: height.l,
        },
        icons: {
            small: width.xs,
            medium: width.s,
            large: width.s,
        },
        space: {
            small: space.xxs,
            medium: space.xs,
            large: space.xsp,
        },
        fontSize: {
            small: fontSizes.xs,
            medium: fontSizes.sp,
            large: fontSizes.sp,
        },
    },
    iconButton: {
        icon: {
            color: colors.dark,
            backgroundColor: 'transparent',
            borderColor: 'transparent',
        },
        width: {
            small: width.m,
            medium: width.m,
            large: width.l,
        },
        heights: {
            small: height.l,
            medium: height.l,
            large: height.xl,
        },
        icons: {
            small: width.sp,
            medium: width.sp,
            large: width.m,
        },
        space: {
            small: space.xxxs,
            medium: space.xxxs,
            large: space.xxs,
        },
        fontSize: {
            small: fontSizes.xxs,
            medium: fontSizes.xxs,
            large: fontSizes.xs,
        },
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
        return buttonBaseStyle.button.heights[size]
    }};
    font-family: ${fonts.light};
    font-size: ${(props) => buttonBaseStyle.button.fontSize[props.size]};
    line-height: ${(props) => {
        const { size } = props
        return buttonBaseStyle.button.heights[size]
    }};
    outline: none;
    overflow: hidden;
    cursor: pointer;
    width: ${(props) => props.width};
    ${(props) => {
        let btnStyle = buttonStyle(buttonBaseStyle.secondary)
        const { modifier, disabled } = props
        if (modifier !== 'default') {
            btnStyle = buttonStyle(buttonBaseStyle[modifier])
        }
        if (disabled) {
            btnStyle = buttonStyle(buttonBaseStyle.disabled)
        }
        return btnStyle
    }}
`

const TextBtn = styled.a`
    ${(props) => {
        let btnStyle = buttonStyle(buttonBaseStyle.textButton.link)

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
        let btnStyle = buttonStyle(buttonBaseStyle.iconButton.icon)
        const { disabled } = props

        if (disabled) {
            btnStyle = buttonStyle(buttonBaseStyle.disabled)
        }
        return btnStyle
    }}
    width: ${(props) => buttonBaseStyle.iconButton.width[props.size]};
    border: 0;
    height: ${(props) => buttonBaseStyle.iconButton.heights[props.size]};
    text-align: center;
`
const Children = styled.div`
    ${(props) => {
        if (props.btnType !== 'icon') {
            return `
                display: flex;
                align-items: center;
            `
        }
    }}
    & > svg {
        ${(props) => {
            const { iconPosition, size, btnType, iconWidth, iconHeight } = props
            if (iconPosition === 'right' && btnType !== 'icon') {
                if (btnType === 'text') {
                    return `
                        width: ${iconWidth || buttonBaseStyle.textButton.icons[size]};
                        height: ${iconHeight || buttonBaseStyle.textButton.icons[size]};
                        margin-left:${buttonBaseStyle.textButton.space[size]};
                    `
                }
                return `
                        width: ${iconWidth || buttonBaseStyle.button.icons[size]};
                        height: ${iconHeight || buttonBaseStyle.button.icons[size]};
                        margin-left:${buttonBaseStyle.button.space[size]};
                        flex: 1;
                    `
            }
            if (iconPosition === 'left' && btnType !== 'icon') {
                if (btnType === 'text') {
                    return `
                        float: ${iconPosition};
                        width: ${iconWidth || buttonBaseStyle.textButton.icons[size]};
                        height: ${iconHeight || buttonBaseStyle.textButton.icons[size]};
                        margin-right:${buttonBaseStyle.textButton.space[size]};
                    `
                }
                return `
                        float: ${iconPosition};
                        width: ${iconWidth || buttonBaseStyle.button.icons[size]};
                        height: ${iconHeight || buttonBaseStyle.button.icons[size]};
                        margin-right:${buttonBaseStyle.button.space[size]};
                        flex: 1;
                    `
            }
            if (btnType === 'icon') {
                return `
                    width: ${iconWidth || buttonBaseStyle.iconButton.icons[size]};
                    height: ${iconHeight || buttonBaseStyle.iconButton.icons[size]};
                `
            }
        }}
    }
    & > span {
        vertical-align: middle;
        white-space: nowrap;
        ${(props) => {
            const { btnType, size } = props
            if (btnType === 'icon') {
                return `
                    display: block;
                    font-size: ${buttonBaseStyle.iconButton.fontSize[size]};
                `
            }
            if (btnType === 'text') {
                return `
                    line-height: ${buttonBaseStyle.textButton.heights[size]};
                    font-size: ${buttonBaseStyle.textButton.fontSize[size]}
                `
            }
        }}
    }
`

/**
 * Primary UI component for user interaction
 */
export const Button: FC<ButtonProps> = ({
    btnType = 'button',
    children,
    size = 'medium',
    testData,
    disabled = false,
    className,
    iconPosition = 'left',
    width = '180px',
    onClick,
    icon = '',
    iconWidth,
    iconHeight,
    modifier = 'primary',
    type = 'button',
}) => {
    const handleClick = (e: MouseEvent<HTMLButtonElement | HTMLDivElement | HTMLAnchorElement>) => {
        if (type !== 'reset' && type !== 'submit') {
            e.preventDefault()
        }
        !disabled && onClick && onClick(e)
    }
    const Icons = icons[icon]
    if (btnType === 'text') {
        return (
            <TextBtn
                className={className}
                data-testid={testData}
                btnType={btnType}
                disabled={disabled}
                size={size}
                width={width}
                onClick={handleClick}
            >
                <Children
                    iconPosition={iconPosition}
                    size={size}
                    btnType={btnType}
                    iconWidth={iconWidth}
                    iconHeight={iconHeight}
                >
                    {iconPosition === 'right' && <span>{children}</span>}
                    {Icons && <Icons width={iconWidth} height={iconHeight}></Icons>}
                    {iconPosition === 'left' && <span>{children}</span>}
                </Children>
            </TextBtn>
        )
    } else if (btnType === 'icon') {
        return (
            <IconBtn btnType={btnType} size={size} data-testid={testData} onClick={handleClick}>
                <Children
                    iconPosition={iconPosition}
                    size={size}
                    btnType={btnType}
                    iconWidth={iconWidth}
                    iconHeight={iconHeight}
                >
                    {Icons && <Icons width={iconWidth} height={iconHeight}></Icons>}
                    <span>{children}</span>
                </Children>
            </IconBtn>
        )
    } else {
        return (
            <DefaultBtn
                className={className}
                data-testid={testData}
                btnType={btnType}
                disabled={disabled}
                size={size}
                width={width}
                onClick={handleClick}
                modifier={modifier}
                type={type}
            >
                <Children
                    iconPosition={iconPosition}
                    size={size}
                    btnType={btnType}
                    iconWidth={iconWidth}
                    iconHeight={iconHeight}
                >
                    {iconPosition === 'right' && <span>{children}</span>}
                    {Icons && <Icons width={iconWidth} height={iconHeight}></Icons>}
                    {iconPosition === 'left' && <span>{children}</span>}
                </Children>
            </DefaultBtn>
        )
    }
}

export default Button
