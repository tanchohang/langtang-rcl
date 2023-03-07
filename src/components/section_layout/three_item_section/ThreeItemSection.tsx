import { SectionItem, SectionItemIProps } from '../section_item/SectionItem';
import './style.scss';

export interface ThreeItemSectionIProps {
  items: SectionItemIProps[];
}

const ThreeItemSection = ({ items }: ThreeItemSectionIProps) => {
  return (
    <div className="three_item_section">
      {items.map(({ imageUrl, imageHeight, imageWidth, text, title }) => (
        <SectionItem
          imageUrl={imageUrl}
          imageHeight={imageHeight}
          imageWidth={imageWidth}
          vertical={true}
          title={title}
          text={text}
        />
      ))}
    </div>
  );
};

export { ThreeItemSection };
