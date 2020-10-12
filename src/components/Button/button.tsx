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
    btnClassName?: string;
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
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void
}

type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>

export type BtnProps = Partial<NativeButtonProps & AnchorButtonProps>
const Button: React.FunctionComponent<BtnProps> = ({ children, width, fixed, white, icon, href, noBorder, className, btnClassName, btnType, type, disabled = false, onClick, ...restProps }: any) => {
    const wrapperClasses = classNames(
        'ff-button',
        className,
        {
            [fixed]: fixed,
        }
    )
    const btnClasses = classNames(
        'ff-button__button',
        btnClassName,
        {
            [`ff-button__button--${btnType}`]: btnType,
            [`ff-button__button--disabled`]: disabled,
        })

    const handleClick = (e: any) => {
        if (type !== 'reset' && type !== 'submit') { e.preventDefault() }
        !disabled && onClick && onClick(e)
    }

    return (
        <div className={wrapperClasses}>
            {btnType === 'link' && href ?
                <a
                    href={href}
                    className={btnClasses}
                    style={{ width: width }}
                    {...restProps}
                >{children}</a>
                :
                <button
                    className={btnClasses}
                    style={{ width: width || '100%' }}
                    type={type}
                    onClick={handleClick}
                    {...restProps}
                >
                    <span>{children}</span>
                    {icon && icon === 'plus' ? <span className="ff-button__button__icon"><IconPlus width="19px" height="19px" /></span> : null}
                </button>
            }
        </div>
    )
}

export default Button
