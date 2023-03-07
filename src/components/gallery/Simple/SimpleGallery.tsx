import './style.scss';

export type ImageType = { imageUrl: string; title: string };

export interface ISimpleGalleryProps {
  images: ImageType[];
}

const SimpleGallery = ({ images }: ISimpleGalleryProps) => {
  return (
    <div className="simple_gallery">
      {images.map(({ imageUrl, title }) => (
        <img src={imageUrl} alt={title} height="300" width="400" />
      ))}
    </div>
  );
};

export { SimpleGallery };
