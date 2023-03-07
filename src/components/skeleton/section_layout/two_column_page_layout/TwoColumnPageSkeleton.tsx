import Skeleton from '../../skeleton';
import './style.scss';

export interface TwoColumnPageSkeletonIProps {}
const TwoColumnPageSkeleton = ({}: TwoColumnPageSkeletonIProps) => {
  return (
    <div className="two_column_page_skeleton">
      <div className="content">
        <div className="text">
          <div>
            <Skeleton type="title" width="100%" height="40px" />
            <Skeleton type="title" width="70%" height="40px" />
          </div>
          <div>
            <Skeleton type="text" width="100%" height="14px" />
            <Skeleton type="text" width="100%" height="14px" />
            <Skeleton type="text" width="100%" height="14px" />
            <Skeleton type="text" width="40%" height="14px" />
          </div>

          <div className="section_items">
            <div className="">
              <Skeleton type="rectangle" width="100px" height="100px" />
              <Skeleton type="title" width="100%" height="20px" />
              <Skeleton type="title" width="40%" height="20px" />

              <Skeleton type="text" width="100%" height="14px" />
              <Skeleton type="text" width="100%" height="14px" />
              <Skeleton type="text" width="100%" height="14px" />
              <Skeleton type="text" width="100%" height="14px" />
              <Skeleton type="text" width="100%" height="14px" />
              <Skeleton type="text" width="100%" height="14px" />
              <Skeleton type="text" width="40%" height="14px" />
            </div>
            <div className="">
              <Skeleton type="rectangle" width="100px" height="100px" />

              <Skeleton type="title" width="100%" height="20px" />
              <Skeleton type="title" width="40%" height="20px" />
              <Skeleton type="text" width="100%" height="14px" />
              <Skeleton type="text" width="100%" height="14px" />
              <Skeleton type="text" width="100%" height="14px" />
              <Skeleton type="text" width="100%" height="14px" />
              <Skeleton type="text" width="100%" height="14px" />
              <Skeleton type="text" width="100%" height="14px" />
              <Skeleton type="text" width="40%" height="14px" />
            </div>
          </div>
        </div>
      </div>
      <div className="image"></div>
    </div>
  );
};
export { TwoColumnPageSkeleton };
