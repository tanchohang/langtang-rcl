import { ComponentMeta } from '@storybook/react';
import { Image } from './Image';

export default {
  component: Image,
  args: { height: '600px', width: '800px' },
} as ComponentMeta<typeof Image>;

export const Default = {};
export const Rounded = { args: { borderRadius: '10px' } };
