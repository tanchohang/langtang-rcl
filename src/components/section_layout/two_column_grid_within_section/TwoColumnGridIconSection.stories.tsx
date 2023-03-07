import { ComponentMeta } from '@storybook/react';
import { TwoColumnGridIconSection } from './TwoColumnGridIconSection';

const sectionItems = [
  {
    imageUrl: 'http://unsplash.it/300/300',
    title: 'section item one',
    text: 'Nulla ullamco irure reprehenderit eiusmod est qui id.',
  },
  {
    imageUrl: 'http://unsplash.it/300/300',
    title: 'section item two',
    text: 'Non eiusmod in excepteur eiusmod labore minim tempor adipisicing.',
  },
  {
    imageUrl: 'http://unsplash.it/300/300',
    title: 'section item three',
    text: 'Proident nulla veniam dolore consequat do aute.',
  },
  {
    imageUrl: 'http://unsplash.it/300/300',
    title: 'section item four',
    text: 'Mollit voluptate anim dolor aliquip irure nisi occaecat veniam consequat.',
  },
];

export default {
  component: TwoColumnGridIconSection,
  args: {
    sectionItems: sectionItems,
    title:
      'Et pariatur aute elit magna aute id reprehenderit elit aute cupidatat sunt.',
    text: 'Aliquip aute nostrud cillum consequat. Proident nostrud sunt sunt eiusmod. In culpa qui aliqua ullamco fugiat labore do culpa consequat nostrud tempor aliquip. Sint eiusmod sunt officia fugiat id proident laboris ullamco. Irure officia Lorem anim magna ullamco irure enim irure tempor sit incididunt sit.',
    buttonText: 'Clice me here!',
  },
} as ComponentMeta<typeof TwoColumnGridIconSection>;

export const Default = {};
