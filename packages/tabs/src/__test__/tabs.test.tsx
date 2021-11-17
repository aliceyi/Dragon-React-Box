import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import Tabs, { TabsProps } from '../index'
// https://github.com/styled-components/jest-styled-components
import 'jest-styled-components'

const testTabs: TabsProps = {
    width: '375px',
    id: 'ffTabs',
    data: [
        { name: '时尚tips' },
        { name: '时尚帮助 tips' },
        { name: '时尚达人风采' },
        { name: '时尚达人' },
    ],
    testData: 'tab-test-has-data',
    onClick: jest.fn(),
    defaultIndex: 1,
}

describe('test Tabs component', () => {
    it('should render the correct default tabs', () => {
        render(<Tabs {...testTabs} />)
        const element = screen.getByTestId('tab-test-has-data')
        expect(element).toBeInTheDocument()
        expect(element.tagName).toEqual('DIV')
        expect(element).toMatchSnapshot()
    })
    it('should click tab to have been called', () => {
        render(<Tabs {...testTabs} />)
        const element = screen.getByText(/时尚tips/i)
        expect(element).toBeInTheDocument()
        fireEvent.click(element)
        expect(testTabs.onClick).toHaveBeenCalled()
        expect(element).toMatchSnapshot()
    })
    it('get a render total number of tab item', () => {
        render(<Tabs {...testTabs} />)
        const element = screen.getAllByText(/时尚/i)
        expect(element).toHaveLength(4)
        expect(element).toMatchSnapshot()
    })
    it('get the tabs width', () => {
        render(<Tabs {...testTabs} />)
        const element = screen.getByTestId('tab-test-has-data')
        expect(element).toBeInTheDocument()
        expect(element.getAttribute('width')).toEqual('375px')
        expect(element).toMatchSnapshot()
    })
    it('get active item index when click tab', () => {
        render(<Tabs {...testTabs} />)
        const element = screen.getByText(/时尚达人风采/i)
        expect(element).toBeInTheDocument()
        fireEvent.click(element)
        expect(element.getAttribute('data-active')).toBeTruthy()
    })
    it('get active item index when init default index', () => {
        render(<Tabs {...testTabs} />)
        const element = screen.getByText(/时尚帮助 tips/i)
        expect(element).toBeInTheDocument()
        // fireEvent.click(element)
        expect(element.getAttribute('data-active')).toBeTruthy()
    })
})
