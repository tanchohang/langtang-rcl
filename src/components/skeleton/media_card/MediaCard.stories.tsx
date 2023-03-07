import { ComponentMeta } from '@storybook/react';
import { MediaCard } from './MediaCard';

export default {
  component: MediaCard,
  args: { auth: false, icons: true },
} as ComponentMeta<typeof MediaCard>;

export const Default = {};
export const Auth = { args: { auth: true } };
