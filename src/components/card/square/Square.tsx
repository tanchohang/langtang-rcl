import './style.scss';
export interface SquareIProps {
  title: string;
  description: string;
  tags: string[];
}
const Square = ({ title, description, tags }: SquareIProps) => {
  return (
    <div className="square_card">
      <h2>{title}</h2>
      <div className="description">{description}</div>
      <div className="tags">
        {tags.map((tag) => (
          <span className="">{tag}</span>
        ))}
      </div>
    </div>
  );
};
export { Square };
