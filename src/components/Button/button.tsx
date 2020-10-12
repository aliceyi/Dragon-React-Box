// import React, { MouseEvent } from 'react'
import React, { AnchorHTMLAttributes, ButtonHTMLAttributes, MouseEvent } from 'react';

import { IconPlus } from '../SvgIcons'
// import styles from './Button.module.scss'
import classNames from 'classnames'


export type Type = 'submit' | 'reset' | 'button'
export type ButtonSize = 'lg' | 'sm'
export type ButtonType = 'primary' | 'default' | 'danger' | 'link' | 'noBorder'

interface BaseButtonProps {
    className?: string;
    /**setting Button is disabled */
    disabled?: boolean;
    /**setting Button size */
    size?: ButtonSize;
    /**setting Button type */
    btnType?: ButtonType;
    type?: Type;
    children: React.ReactNode;
    href?: string;
    width?: string;
    /** setting Button is fixed */
    fixed?: string;
    icon?: string;
    testId?: string;
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void
}

type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>

export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>
const Button: React.FunctionComponent<ButtonProps> = ({ children, width, fixed, white, icon, href, noBorder, className, btnType, type, disabled = false, onClick, testId, ...restProps }: any) => {
    // const wrapperClasses = classNames(
    //     'ff-button',
    //     className,
    //     {
    //         [fixed]: fixed,
    //     }
    // )
    const btnClasses = classNames(
        'ff__button',
        className,
        {
            [`ff__button--${btnType}`]: btnType,
            [`ff__button--disabled`]: disabled,
        })

    const handleClick = (e: any) => {
        if (type !== 'reset' && type !== 'submit') { e.preventDefault() }
        !disabled && onClick && onClick(e)
    }

    if (btnType === 'link' && href) {
        return (
            <a
                href={href}
                className={btnClasses}
                style={{ width: width }}
                data-testid={testId}
                {...restProps}
            >{children}</a>
        )
    } else {
        return (
            <button
                className={btnClasses}
                style={{ width: width || '100%' }}
                type={type}
                onClick={handleClick}
                data-testid={testId}
                disabled={disabled}
                {...restProps}
            >
                <span>{children}</span>
                {icon && icon === 'plus' ? <span className="ff__button__icon"><IconPlus width="19px" height="19px" /></span> : null}
            </button>
        )
    }
}

export default Button
