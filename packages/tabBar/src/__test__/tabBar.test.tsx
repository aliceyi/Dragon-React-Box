import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import TabBar, { TabBarProps } from '../index'
// https://github.com/styled-components/jest-styled-components
import 'jest-styled-components'

const testTabBars: TabBarProps = {
    classNames: 'abc',
    testData: 'tabBar-test-has-data',
    defaultIndex: 1,
    tabs: [
        {
            icon: 'IconEdit',
            iconProps: {
                width: '1.5rem',
                height: '1.5rem',
            },
            text: '发现',
            path: '/a',
        },
        {
            icon: 'IconPlus',
            iconProps: {
                width: '1.5rem',
                height: '1.5rem',
            },
            text: '探索',
            path: '/b',
        },
        {
            icon: 'IconGuide',
            iconProps: {
                width: '1.5rem',
                height: '1.5rem',
            },
            text: '远征',
            path: '/c',
        },
    ],
    onClick: jest.fn(),
}

describe('test Tabs component', () => {
    it('should render the correct default tabBar', () => {
        render(<TabBar {...testTabBars} />)
        const element = screen.getByTestId('tabBar-test-has-data')
        expect(element).toBeInTheDocument()
        expect(element.tagName).toEqual('DIV')
        expect(element).toMatchSnapshot()
    })
    it('should click tabBar to have been called', () => {
        render(<TabBar {...testTabBars} />)
        const element = screen.getByText(/发现/i)
        expect(element).toBeInTheDocument()
        fireEvent.click(element)
        expect(testTabBars.onClick).toHaveBeenCalled()
        expect(element).toMatchSnapshot()
    })
    it('get a render total number of tabBar item', () => {
        render(<TabBar {...testTabBars} />)
        const element = screen.getAllByText(/探索/i)
        expect(element).toHaveLength(1)
        expect(element).toMatchSnapshot()
    })
    it('get active item index when click tab', () => {
        render(<TabBar {...testTabBars} />)
        const element = screen.getByTestId(`${testTabBars.testData}_2`)
        console.log(element)
        expect(element).toBeInTheDocument()
        fireEvent.click(element)
        expect(element.getAttribute('data-testid')).toEqual(`${testTabBars.testData}_2`)
    })
})
