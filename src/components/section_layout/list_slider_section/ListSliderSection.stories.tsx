import { ComponentMeta } from '@storybook/react';
import { ListSliderSection } from './ListSliderSection';

export default {
  component: ListSliderSection,
  args: {
    images: [
      {
        imageSrc: 'http://unsplash.it/300/500?gravity=east',
        text: 'Nisi anim aliqua aliqua ea labore dolore dolore excepteur sunt reprehenderit irure.Cillum pariatur ea elit sint nisi voluptate mollit quis tempor.',
      },
      {
        imageSrc: 'http://unsplash.it/300/500?gravity=north',
        text: 'Esse et nostrud quis do incididunt sint consectetur Lorem elit et anim.Duis quis ipsum ullamco id proident aute tempor.',
      },
    ],
  },
} as ComponentMeta<typeof ListSliderSection>;

export const Default = {};
