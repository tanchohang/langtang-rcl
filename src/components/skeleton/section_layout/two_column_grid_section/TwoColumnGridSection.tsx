import Skeleton from '../../skeleton';
import { SectionItemSkeleton } from '../section_item/SectionItemSkeleton';
import './style.scss';

export interface TwoColumnGridSectionSkeletonIProps {}
const TwoColumnGridSectionSkeleton =
  ({}: TwoColumnGridSectionSkeletonIProps) => {
    return (
      <div className="section_skeleton">
        <div className="section_items">
          <SectionItemSkeleton />
          <SectionItemSkeleton />
          <SectionItemSkeleton />
          <SectionItemSkeleton />
        </div>
        <div className="section_content">
          <Skeleton type="title" width="90%" />
          <Skeleton type="title" width="60%" />
          <Skeleton type="text" width="90%" height="12px" />
          <Skeleton type="text" width="90%" height="12px" />
          <Skeleton type="text" width="90%" height="12px" />
          <Skeleton type="text" width="90%" height="12px" />
          <div className="call_to_action"></div>
        </div>
      </div>
    );
  };
export { TwoColumnGridSectionSkeleton };
