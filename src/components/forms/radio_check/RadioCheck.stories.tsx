import { ComponentMeta } from '@storybook/react';
import { RadioCheck } from './RadioCheck';

export default {
  title: 'forms/RadioCheck',
  component: RadioCheck,
  args: { name: 'gender', type: 'checkbox' },
} as ComponentMeta<typeof RadioCheck>;

export const Checkbox = {};
export const Radio = { args: { type: 'radio' }, parameter: {} };
