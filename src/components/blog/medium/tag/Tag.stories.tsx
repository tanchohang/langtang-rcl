import { ComponentMeta } from '@storybook/react';
import { Tag } from './Tag';

export default {
  title: 'Blog/Medium/Tag',
  component: Tag,
  args: { tag: 'TailwindCss' },
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
  },
} as ComponentMeta<typeof Tag>;

export const Default = {};
