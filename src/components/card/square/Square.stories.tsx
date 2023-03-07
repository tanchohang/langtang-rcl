import { ComponentMeta } from '@storybook/react';
import { Square } from './Square';

export default {
  component: Square,
  args: {
    title: 'Apple Music Embeddable Web Player Widget',
    description:
      'Building a custom multisite compatible WordPress plugin to build global search with Algolia. Embeddable web player widget for Apple Music that lets users log in and listen to full song playback in the browser leveraging',
    tags: ['Javascript', 'HTML', 'CSS'],
  },
} as ComponentMeta<typeof Square>;

export const Default = {};
