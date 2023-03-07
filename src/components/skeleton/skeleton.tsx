import './style.scss';
interface SkeletonIProps {
  type:
    | 'title'
    | 'text'
    | 'avatar'
    | 'thumbnail'
    | 'icon'
    | 'square'
    | 'circle'
    | 'triangle'
    | 'diamond'
    | 'arch'
    | 'rectangle';
  width?: string;
  height?: string;
}

export default function Skeleton({ type, width, height }: SkeletonIProps) {
  return (
    <div
      className={`skeleton ${type}`}
      style={{ width: width, height: height }}
    ></div>
  );
}
