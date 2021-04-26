import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'
import theme from '@dragon/react-theme'
import icons from '@dragon/react-icons'
import styled from 'styled-components'

export interface BaseButtonProps {
    /**
     * setting button style
     */
    className?: string
    /**
     * Is this the principal call to action on the page?
     */
    btnType?: 'primary' | 'default' | 'link'
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
     * setting button  text alignment
     */
    textAlignment?: 'left' | 'center' | 'right'
    /**
     * setting button  icon alignment
     */
    iconAlignment?: 'left' | 'right'
    /**
     * setting button width
     */
    width?: string
    /**
     * setting button icon
     */
    icon?: string
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

const { colors, space, fontSizes, fonts, height } = theme

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
    font-size: ${fontSizes.m};
    line-height: ${(props) => {
        const { size } = props
        return buttonBaseStyle.heights[size]
    }};
    outline: none;
    overflow: hidden;
    cursor: pointer;
    width: ${(props) => props.width};
    text-align: ${(props) => props.textAlignment};
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
    text-align: ${(props) => props.textAlignment};
    display: inline-block;
`
const Children = styled.div`
    & > svg {
        ${(props) => {
            const { iconAlignment, size, btnType } = props
            if (iconAlignment === 'right') {
                if (btnType === 'link') {
                    return `
                        float: ${iconAlignment};
                        height: ${buttonBaseStyle.heights[size]};
                        margin-left:${buttonBaseStyle.linkHorizontalSpace[size]};
                    `
                }
                return `
                        float: ${iconAlignment};
                        height: ${buttonBaseStyle.heights[size]};
                        margin-left:${buttonBaseStyle.horizontalSpace[size]};
                    `
            }
            if (iconAlignment === 'left') {
                if (btnType === 'link') {
                    return `
                        float: ${iconAlignment};
                        height: ${buttonBaseStyle.heights[size]};
                        margin-right:${buttonBaseStyle.linkHorizontalSpace[size]};
                    `
                }
                return `
                        float: ${iconAlignment};
                        height: ${buttonBaseStyle.heights[size]};
                        margin-right:${buttonBaseStyle.horizontalSpace[size]};
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
    textAlignment = 'center',
    iconAlignment = 'left',
    width = '180px',
    onClick,
    icon,
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
                textAlignment={textAlignment}
            >
                <Children iconAlignment={iconAlignment} size={size} btnType={btnType}>
                    {Icons && <Icons> </Icons>} <span>{children}</span>
                </Children>
            </LinkBtn>
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
                    textAlignment={textAlignment}
                    onClick={handleClick}
                >
                    <Children iconAlignment={iconAlignment} size={size} btnType={btnType}>
                        {Icons && <Icons> </Icons>} <span>{children}</span>
                    </Children>
                </DefaultBtn>
            </div>
        )
    }
}

export default Button
