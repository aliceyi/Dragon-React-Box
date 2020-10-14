import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Button, { ButtonProps } from './button';

export default {
  title: 'Example/MyButton',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    btnType: {
      control: { type: 'select', options: ['primary', 'default', 'white'] },
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} >Primary Button</Button>;

export const Primary = Template.bind({});
Primary.args = {
  btnType: 'primary',
  width: '100px'
};

export const Default = Template.bind({});
Default.args = {
  btnType: 'default'
}