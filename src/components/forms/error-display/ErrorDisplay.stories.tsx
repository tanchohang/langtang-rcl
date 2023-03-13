import { ComponentMeta } from '@storybook/react';
import { ErrorDisplay } from './ErrorDisplay';

export default {
  title: 'Forms/ErrorDisplay',
  component: ErrorDisplay,
  args: { text: 'name is required', show: true, success: true },
} as ComponentMeta<typeof ErrorDisplay>;

export const Default = {};
