import { ComponentMeta } from '@storybook/react';
import { Input } from './Input';

export default {
  title: 'Forms/Classic/Input',
  component: Input,
  args: { name: 'name', type: 'password', label: 'Name', size: 'sm' },
} as ComponentMeta<typeof Input>;

export const Default = {};
export const FloatingLabel = { args: { floatingLabel: true } };
