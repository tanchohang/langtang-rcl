import { SectionItem, SectionItemIProps } from '../section_item/SectionItem';
import './style.scss';

export interface TwoColumnGridIconSectionIProps {
  sectionItems: SectionItemIProps[];
  title: string;
  text: string;
  buttonText: string;
  onButtonClick: () => void;
}
const TwoColumnGridIconSection = ({
  sectionItems,
  title,
  text,
  buttonText,
  onButtonClick,
}: TwoColumnGridIconSectionIProps) => {
  return (
    <div className="two_column_grid_icon_section">
      <div className="section_items">
        {sectionItems.map((sectionItem) => (
          <SectionItem
            imageUrl={sectionItem.imageUrl}
            title={sectionItem.title}
            text={sectionItem.text}
            vertical={true}
            flip={false}
          />
        ))}
      </div>
      <div className="side_content">
        <h4>{title}</h4>
        <p>{text}</p>
        <p>
          <button type="button" onClick={onButtonClick}>
            {buttonText}
          </button>
        </p>
      </div>
    </div>
  );
};
export { TwoColumnGridIconSection };
