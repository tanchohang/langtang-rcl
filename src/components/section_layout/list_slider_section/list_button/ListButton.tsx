import './style.scss';

export interface ListButtonIProps {
  text: string;
  onClick: () => void;
}

const ListButton = ({ text, onClick }: ListButtonIProps) => {
  return (
    <div className="list_button">
      <button type="button" onClick={onClick}>
        <span></span>
      </button>
      <span className="text">{text}</span>
    </div>
  );
};
export { ListButton };
