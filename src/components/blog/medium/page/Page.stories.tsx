import { ComponentMeta } from '@storybook/react';
import { Page } from './Page';

export default {
  title: 'Blog/Medium/Page',
  component: Page,
  args: {
    twoPageLayout: false,
    title: 'Create Web Components with Lit Element, Vite, and Tailwind',
    excerpt:
      'No crap, show me the tailwind web components starter kit First of all, if you don’t mind about the details, here is the repo of the starter kit:...',
    imgUrl:
      'https://miro.medium.com/fit/c/224/224/1*WrZ3oOZAV16XbmOu0fmI6g.jpeg',
    tags: ['TailwindCss'],
    created_at: new Date('2023-02-03T23:02:06.407+00:00'),
    slug: 'Create_Web_Components_with_Lit_Element',
    creator: {
      imgUrl:
        'https://miro.medium.com/fit/c/176/176/1*55KbukPZhXbLhvQ3QLpPGg.png',
      name: 'Frontend Team',
    },
  },
  argTypes: { backgroundColor: { control: 'color' } },
} as ComponentMeta<typeof Page>;

export const Default = {};
export const TwoPageLayout = { arg: { twoPageLayout: true } };
