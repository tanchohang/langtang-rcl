import { useState } from 'react';
import { ListButton } from './list_button/ListButton';
import './style.scss';

type listImageType = {
  imageSrc: string;
  text: string;
};

export interface ListSliderSectionIProps {
  images: listImageType[];
}

const ListSliderSection = ({ images }: ListSliderSectionIProps) => {
  const [currentItem, setCurrentItem] = useState(images[0]);
  return (
    <div className="list_slider_section">
      <div className="image_container">
        <img src={currentItem.imageSrc} />
      </div>
      <div className="list_contaier">
        <ul>
          {images.map((image, i) => (
            <li>
              <ListButton
                text={image.text}
                onClick={() => setCurrentItem(images[i])}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export { ListSliderSection };
