import { ComponentMeta } from '@storybook/react';
import { Label } from './label';

export default {
  title: 'Forms/Label',
  component: Label,
  args: { children: 'Label' },
} as ComponentMeta<typeof Label>;

export const Default = {};
