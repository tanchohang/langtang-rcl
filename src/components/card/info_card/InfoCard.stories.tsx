import { ComponentMeta } from '@storybook/react';
import { InfoCard } from './InfoCard';

export default {
  component: InfoCard,
  args: {
    title: 'Building a Headless Mobile App CMS From Scratch',
    text: 'Dolore sint excepteur qui aliqua. Duis officia nulla sint in officia qui enim quis nulla. Anim eu ut sunt occaecat.Ullamco in consequat et velit et consectetur adipisicing ullamco et ipsum sint. Incididunt minim Lorem culpa adipisicing ullamco cupidatat consectetur duis exercitation. Excepteur anim consequat duis velit occaecat cupidatat laborum id aute incididunt deserunt deserunt. Deserunt ea anim quis id aliqua sunt voluptate anim. Nisi adipisicing velit esse ipsum in sit ipsum do laboris ipsum elit sit. Ex nostrud elit labore consectetur. Ut ea labore incididunt nisi cillum minim.',
    backgroundImage: 'http://unsplash.it/400?random&gravity=center',
    url: 'test',
    tags: ['Javascript', 'CSS', 'HTML'],
    github: 'test',
  },
} as ComponentMeta<typeof InfoCard>;

export const Default = {};
