import { ComponentMeta } from '@storybook/react';
import { SimpleGallery, ImageType } from './SimpleGallery';

export default {
  component: SimpleGallery,
  args: {
    images: [
      {
        imageUrl: 'https://source.unsplash.com/vI8Zk9_3UKI/600x300',
        title: 'title 1',
      } as ImageType,
      {
        imageUrl: 'https://source.unsplash.com/rGPSxV20i44/600x300',
        title: 'title 1',
      } as ImageType,

      {
        imageUrl: 'https://source.unsplash.com/uwmGzKbPoeE/600x300',
        title: 'title 1',
      } as ImageType,
      {
        imageUrl: 'https://source.unsplash.com/xDHGpkCRYf8/600x300',
        title: 'title 1',
      } as ImageType,
      {
        imageUrl: 'https://source.unsplash.com/mytmREWvz5U/600x300',
        title: 'title 1',
      } as ImageType,
      {
        imageUrl: 'https://source.unsplash.com/3wlvnyLesnc/600x300',
        title: 'title 1',
      } as ImageType,
      {
        imageUrl: 'https://source.unsplash.com/kfd3Ptl6xEY/600x300',
        title: 'title 1',
      } as ImageType,
      {
        imageUrl: 'https://source.unsplash.com/0sggvtAUjO0/600x300',
        title: 'title 1',
      } as ImageType,
      {
        imageUrl: 'https://source.unsplash.com/9i6Dyqfpqmk/600x300',
        title: 'title 1',
      } as ImageType,
    ],
  },
} as ComponentMeta<typeof SimpleGallery>;

export const Default = {};
