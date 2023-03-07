import { ComponentMeta } from '@storybook/react';
import { Video } from './Video';

export default {
  component: Video,
  args: { height: '600px', width: '800px' },
} as ComponentMeta<typeof Video>;

export const Default = {};
export const Rounded = { args: { borderRadius: '10px' } };
