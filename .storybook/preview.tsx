

import React from 'react'
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from '@storybook/addon-docs/blocks'

import '../src/styles/index.scss'
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  //   options: {
  //     theme: {
  //       brandTitle: 'Dragon React Box Library',
  //       brandUrl: 'https://gitlab.fftech.info/dragon/consumer-web/dragon-react-box'
  //     }
  //   }
}

// export const decorators = [(Story) => (<div style={{ margin: '12px' }}> <Story /></div >)];

