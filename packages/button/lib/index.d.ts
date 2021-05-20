import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
/**
 * design standard
 * icon size : L M S
 * font size : L M S
 * icon space : L M S
 *
 *
 * what is the style when button is link button.
 */
export interface BaseButtonProps {
    /**
     * Like the original type attribute of the button
     */
    type?: 'button' | 'reset' | 'submit';
    /**
     * setting button style
     */
    className?: string;
    /**
     * Is this the principal call to action on the page?
     */
    btnType?: 'button' | 'text' | 'icon';
    /**
     * setting button priority
     */
    modifier: 'primary' | 'default';
    /**
     * How large should the button be?
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * button children node
     */
    children: React.ReactNode;
    /**
     * setting test id
     */
    testData?: string;
    /**
     * setting disabled
     */
    disabled?: boolean;
    /**
     * setting button icon alignment
     */
    iconPosition?: 'left' | 'right';
    /**
     * setting button width
     */
    width?: string;
    /**
     * setting button icon
     */
    icon?: string;
    /**
     * setting svg icon's width
     */
    iconWidth?: string;
    /**
     * setting svg icon's height
     */
    iconHeight?: string;
    /**
     * setting button click callback
     */
    onClick?: () => void;
}
declare type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
declare type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;
export declare type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
/**
 * Primary UI component for user interaction
 */
export declare const Button: FC<ButtonProps>;
export default Button;
