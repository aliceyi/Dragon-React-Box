import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import './Button.scss';
import classNames from 'classnames'

export interface BaseButtonProps {
    /**
     * setting button style
     */
    className?: string;
    /**
     * Is this the principal call to action on the page?
     */
    btnType?: 'primary' | 'default' | 'link';
    /**
     * How large should the button be?
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * button children node
     */
    children: React.ReactNode;
    /**
     * when btnType is a link, href have to value
     */
    href?: string;
    /**
     * setting test id
     */
    testData?: string;
    /**
     * setting disabled
     */
    disabled?: boolean;
    /**
     * setting button  text alignment
     */
    textAlignment?: 'left' | 'center' | 'right';
    /**
     * setting button  icon alignment
     */
    iconAlignment?: 'left' | 'right';
    /**
     * setting button width
     */
    width?: string;
}

type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

/**
 * Primary UI component for user interaction
 */
export const Button: FC<ButtonProps> = ({
    btnType = 'default',
    children,
    size = 'medium',
    href,
    testData,
    className,
    disabled = false,
    textAlignment = 'center',
    iconAlignment = 'left',
    width = '180px',
    ...props
}) => {
    // const mode = btnType ? 'storybook-button--primary' : 'storybook-button--secondary';
    const btnClasses = classNames(
        'ff__button',
        className,
        {
            [`ff__button--${btnType}`]: btnType,
            [`ff__button--disabled`]: disabled,
            [`ff__button--${size}`]: size,
            [`ff__button--text-${textAlignment}`]: textAlignment,
            [`ff__button--icon-${iconAlignment}`]: iconAlignment
        })
    if (btnType === 'link' && href) {
        return (
            <a
                style={{ width: width }}
                href={href}
                className={btnClasses}
                data-testid={testData}
                {...props}
            >{children}</a>
        )
    } else {
        return (
            <button
                style={{ width: width }}
                className={btnClasses}
                data-testid={testData}
                disabled={disabled}
                {...props}
            >
                <span className="content">{children}</span>
                {/* {icon && icon === 'plus' ? <span className="ff__button__icon"><IconPlus width="19px" height="19px" /></span> : null} */}
            </button>
        )
    }
};


export default Button;
