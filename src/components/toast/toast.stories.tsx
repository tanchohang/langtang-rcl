import { ComponentMeta } from '@storybook/react';
import React from 'react';
import { Toast } from './toast';

export default {
  component: Toast,
  args: {
    message: 'user action: added new user to the database',
    title: 'Add new user to the database',
  },
} as ComponentMeta<typeof Toast>;

export const Success = {};
export const Info = {
  render: (args) => <Toast variant="info" {...args} />,
};

export const Warning = {
  render: (args) => <Toast variant="warning" {...args} />,
};
export const Error = { render: (args) => <Toast variant="error" {...args} /> };
export const Subtle = {
  render: (args) => <Toast variant="subtle" {...args} />,
};
