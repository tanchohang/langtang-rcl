import { ComponentMeta } from '@storybook/react';
import { Input } from './input';

export default {
  title: 'Forms/Input',
  component: Input,
  args: { placeholder: 'Enter your email address' },
} as ComponentMeta<typeof Input>;

export const Default = {};
export const Disabled = { args: { disabled: true } };
export const WithLabel = {};
