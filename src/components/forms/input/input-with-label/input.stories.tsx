import { ComponentMeta } from '@storybook/react';
import { InputWithLabel } from './input';

export default {
  title: 'Forms/Input',
  component: InputWithLabel,
  args: { placeholder: 'Enter your email address' },
} as ComponentMeta<typeof InputWithLabel>;

export const Default = {};
export const Disabled = { args: { disabled: true } };
export const WithLabel = {};
