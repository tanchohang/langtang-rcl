import Skeleton from '../../skeleton';
import './style.scss';

export interface SectionItemSkeletonIProps {}

const SectionItemSkeleton = ({}: SectionItemSkeletonIProps) => {
  return (
    <div className="skeleton_section_item">
      <div className="image"></div>

      <div className="text">
        <Skeleton type="text" width="100%" height="12px" />
        <Skeleton type="text" width="70%" height="12px" />
        <Skeleton type="text" width="100%" height="10px" />
        <Skeleton type="text" width="100%" height="10px" />
        <Skeleton type="text" width="80%" height="10px" />
      </div>
    </div>
  );
};
export { SectionItemSkeleton };
