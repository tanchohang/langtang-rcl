import { ComponentMeta } from '@storybook/react';
import { Avatar } from './Avatar';

export default {
  component: Avatar,
  args: { height: '100px', width: '100px' },
} as ComponentMeta<typeof Avatar>;

export const Default = {};
