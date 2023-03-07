import './style.scss';

export interface AvatarProps {
  userImgUrl: string;
  width: number;
  height: number;
}
const SimpleAvatar = ({ userImgUrl, height, width }: AvatarProps) => {
  return (
    <div
      className="simple_avatar"
      style={{
        backgroundImage: `url(${userImgUrl})`,
        width: `${width}px`,
        height: `${height}px`,
      }}
    ></div>
  );
};

export { SimpleAvatar };
