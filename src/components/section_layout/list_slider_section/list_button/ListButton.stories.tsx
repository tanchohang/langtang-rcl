import { ComponentMeta } from '@storybook/react';
import { ListButton } from './ListButton';

export default {
  component: ListButton,
  args: { text: 'list 1', onClick: () => console.log('list 1 clicked') },
} as ComponentMeta<typeof ListButton>;

export const Default = {};
