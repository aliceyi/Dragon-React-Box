import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

// import { action } from '@storybook/addon-actions';
import { Button, ButtonProps } from '../components/Button/index'
// import { Button, ButtonProps } from '@dragon/dragon-button/button';

export default {
    title: 'Example/MyButton',
    component: Button,
    argTypes: {
        onClick: { action: 'mybutton clicked' },
    },
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
    btnType: 'primary',
    children: 'primary btn',
    width: '180px',
    //   onClick: action('my button click')
}

// export const Link = Template.bind({});
// Link.args = {
//   btnType: 'link',
//   children: 'link btn'
// }

// import React from 'react';
// // also exported from '@storybook/react' if you can deal with breaking changes in 6.1
// import { Story, Meta } from '@storybook/react/types-6-0';

// import { Button, ButtonProps } from './button';

// export default {
//   title: 'Example/Button12',
//   component: Button,
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
// } as Meta;

// const Template: Story<ButtonProps> = (args) => <Button {...args} />;

// export const Primary = Template.bind({});
// Primary.args = {
//   btnType: 'default',
//   // label: 'Button',
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
