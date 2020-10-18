import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
// import './button.css';
import classNames from 'classnames'

export interface BaseButtonProps {
    /**
     * setting button style
     */
    className?: string;
    /**
     * Is this the principal call to action on the page?
     */
    btnType?: 'primary' | 'default' | 'danger' | 'link' | 'noBorder';
    /**
     * What background color to use
     */
    backgroundColor?: string;
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
    ...props
}) => {
    // const mode = btnType ? 'storybook-button--primary' : 'storybook-button--secondary';
    const btnClasses = classNames(
        'ff__button',
        className,
        {
            [`ff__button--${btnType}`]: btnType,
            [`ff__button--disabled`]: disabled,
        })
    if (btnType === 'link' && href) {
        return (
            <a
                href={href}
                className={btnClasses}
                data-testid={testData}
                {...props}
            >{children}</a>
        )
    } else {
        return (
            <button
                className={btnClasses}
                data-testid={testData}
                disabled={disabled}
                {...props}
            >
                <span>{children}</span>
                {/* {icon && icon === 'plus' ? <span className="ff__button__icon"><IconPlus width="19px" height="19px" /></span> : null} */}
            </button>
        )
    }
};


export default Button;