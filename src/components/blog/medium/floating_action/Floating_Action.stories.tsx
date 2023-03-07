import { ComponentMeta } from '@storybook/react';
import { FloatingAction } from './Floating_Action';

export default {
  title: 'Blog/Medium/Floating_Action',
  component: FloatingAction,
  args: {
    likes: 55,
    comments: 10,
  },
} as ComponentMeta<typeof FloatingAction>;

export const Default = {};
