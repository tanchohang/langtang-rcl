import { ComponentMeta } from '@storybook/react';
import { Button } from './button';

export default {
  component: Button,
  args: { variant: 'default', size: 'md', children: 'Button' },
} as ComponentMeta<typeof Button>;

export const Default = {};
export const Dark = { args: { variant: 'dark' } };
export const Destructive = { args: { variant: 'destructive' } };
export const Outline = { args: { variant: 'outline' } };
export const Subtle = { args: { variant: 'subtle' } };
export const Ghost = { args: { variant: 'ghost' } };
export const Link = { args: { variant: 'link' } };
