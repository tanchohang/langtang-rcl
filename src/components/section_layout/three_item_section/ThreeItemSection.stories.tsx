import { ComponentMeta } from '@storybook/react';
import { SectionItemIProps } from '../section_item/SectionItem';
import { ThreeItemSection } from './ThreeItemSection';

const items = [
  {
    imageUrl: 'http://unsplash.it/400/300?random',
    imageHeight: 300,
    imageWidth: 300,
    title: 'Ullamco incididunt ut do sit labore ullamco ex enim labore.',
    text: 'Voluptate reprehenderit do dolor deserunt dolore nisi aliquip exercitation. Eu anim id aliquip commodo consectetur nostrud laborum proident id ad aliqua excepteur eu. Eiusmod deserunt aliqua excepteur nisi. Exercitation et quis fugiat do duis sit aute non laboris cupidatat consequat labore duis sunt.',
  },
  {
    imageUrl: 'http://unsplash.it/400/300?gravity=center',
    imageHeight: 300,
    imageWidth: 300,
    title: 'Sunt laborum est mollit dolore aute nostrud.',
    text: 'Officia aute magna aute consequat eu id commodo sunt ut incididunt laborum eiusmod. Ad cupidatat laborum veniam quis amet consectetur et id nisi. Sit eiusmod adipisicing non labore est ullamco aute qui cillum aliqua aute enim elit.',
  },
  {
    imageUrl: 'http://unsplash.it/400/300?gravity=north',
    imageHeight: 300,
    imageWidth: 300,
    title: 'Veniam laborum adipisicing nulla veniam commodo sit qui.',
    text: 'Et magna irure ea amet proident magna nulla velit. Nulla commodo officia eiusmod laboris est Lorem sit incididunt sint Lorem excepteur ullamco est aliquip. Adipisicing voluptate excepteur quis minim irure aliquip velit incididunt est dolor cillum. Esse mollit laborum aute ipsum dolore deserunt adipisicing. Excepteur pariatur non non laborum labore ipsum non elit. Anim anim in sunt ipsum deserunt qui aliqua quis.',
  },
] as SectionItemIProps[];

export default {
  component: ThreeItemSection,
  args: { items: items },
} as ComponentMeta<typeof ThreeItemSection>;

export const Default = {};
