import { ComponentMeta } from '@storybook/react';
import { Card } from './Card';

export default {
  component: Card,
  args: { auth: false, icons: true },
} as ComponentMeta<typeof Card>;

export const Default = {};
export const Auth = { args: { auth: true } };
