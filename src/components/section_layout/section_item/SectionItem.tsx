import './style.scss';

export interface SectionItemIProps {
  vertical?: boolean;
  flip?: boolean;
  imageUrl?: string;
  imageWidth?: number;
  imageHeight?: number;
  title?: string;
  text?: string;
}

const SectionItem = ({
  vertical,
  flip,
  imageUrl,
  imageHeight,
  imageWidth,
  title,
  text,
}: SectionItemIProps) => {
  return (
    <div
      className={`sectionItem ${vertical ? 'vertical' : ''} ${
        flip ? 'flip' : ''
      } ${vertical && flip ? 'vertflip' : ''}`}
    >
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title ? title : 'image for the text'}
          height={imageHeight}
          width={imageWidth}
        />
      )}
      <div className={`section-text-area ${vertical && 'text-center'}`}>
        {title && <h4>{title}</h4>}
        <p className={`title ${vertical && 'text-center'}`}>{text}</p>
      </div>
    </div>
  );
};

export { SectionItem };
