import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('Welcom page', module).add('welcome', () => {
    return (
        <>
            <h1>欢迎来到 dragon-react-box 组件库</h1>
            <p>dragon-react-box 是 farfetch tech 提供的组件</p>
            <h3>安装试试</h3>
            <code>npm install @farfetch/dragon-react-box --save</code>
            <br />
            Or
            <br />
            <code>yarn add @farfetch/dragon-react-box</code>
        </>
    )
})
