import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: { primary: true, label: 'Button' },
} as ComponentMeta<typeof Button>;

export const Default = {};
export const Secondary = { args: { primary: false } };
export const Large = { args: { size: 'large' } };
export const Small = { args: { size: 'small' } };
