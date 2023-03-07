import { ComponentMeta } from '@storybook/react';
import { SectionItem } from './SectionItem';

export default {
  component: SectionItem,
  args: {
    vertical: true,
    flip: false,
    imageUrl: 'http://unsplash.it/400/300?random',
    imageHeight: 300,
    imageWidth: 300,
    title: 'Eu veniam reprehenderit officia',
    text: 'Mollit velit veniam consequat do elit aute. Veniam exercitation aliquip sint esse. Do consequat proident consequat nulla ipsum anim cupidatat id deserunt aliqua nostrud aute. Tempor consectetur ut consectetur in. Consectetur nisi do reprehenderit elit nostrud consequat velit ea adipisicing. Cupidatat nulla sit in voluptate eiusmod.',
  },
} as ComponentMeta<typeof SectionItem>;

export const Default = {};
