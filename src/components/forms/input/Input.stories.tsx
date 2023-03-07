import { ComponentMeta } from '@storybook/react';
import { Input } from './Input';

export default {
  title: 'Forms/Input',
  component: Input,
  args: { name: 'name', type: 'password', label: 'Name', size: 'sm' },
} as ComponentMeta<typeof Input>;

export const Default = {};
