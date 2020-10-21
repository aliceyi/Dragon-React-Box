import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import Button, { ButtonProps } from './button'

const defaultProps = {
    onClick: jest.fn(),
    testData: 'default'
}

const testProps: ButtonProps = {
    width: '100px',
    className: 'testBtn',
    btnType: 'primary',
    testData: 'testProps'
}

const linkProps: ButtonProps = {
    btnType: 'link',
    testData: 'link',
    href: 'http://www.farfetch.com'
}

const disableProps: ButtonProps = {
    testData: 'disabled',
    disabled: true,
    onClick: jest.fn(),
}

describe('test Button component', () => {
    it('should render the correct default button', () => {
        render(<Button {...defaultProps}>Default</Button>)
        const element = screen.getByTestId('default')
        expect(element).toBeInTheDocument()
        expect(element.tagName).toEqual('BUTTON')
        expect(element).toHaveClass('ff__button')
        expect(element.disabled).toBeFalsy()
        fireEvent.click(element)
        expect(defaultProps.onClick).toHaveBeenCalled()
    })
    it('should render the correct component based on different props', () => {
        render(<Button {...testProps}>test Props</Button>)
        const element = screen.getByTestId('testProps')
        expect(element).toBeInTheDocument()
        expect(element).toHaveClass('ff__button ff__button--primary testBtn')

    })
    it('should render a link when btnType equals link and href is provided', () => {
        render(<Button {...linkProps}>Link</Button>)
        const element = screen.getByTestId('link')
        expect(element).toBeInTheDocument()
        expect(element.tagName).toEqual('A')
        expect(element).toHaveClass('ff__button ff__button--link')
    })
    it('should render disabled button when disabled set to true', () => {
        render(<Button {...disableProps}>Disabled</Button>)
        const element = screen.getByTestId('disabled')
        expect(element).toBeInTheDocument()
        expect(element.disabled).toBeTruthy()
        fireEvent.click(element)
        expect(disableProps.onClick).not.toHaveBeenCalled()
    })
})
