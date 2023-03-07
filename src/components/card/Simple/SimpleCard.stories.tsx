import { ComponentMeta } from '@storybook/react';
import { SimpleCard } from './SimpleCard';

export default {
  component: SimpleCard,
  args: {
    auth: false,
    imageUrl: 'https://source.unsplash.com/p1dtEefClWY/600x300',
    title: 'Basic Folder Structure',
    description: `Before adding storybook and typescript and moving further let's create a basic folder structure for our project. You can have any folder structure that you prefer.`,
  },
} as ComponentMeta<typeof SimpleCard>;

export const Default = {};
export const Auth = {
  args: {
    auth: true,
    userImgUrl: 'https://source.unsplash.com/rDEOVtE7vOs/600x300',
  },
};
