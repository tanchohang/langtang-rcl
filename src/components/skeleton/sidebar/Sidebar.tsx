import Skeleton from '../skeleton';
import './style.scss';

function Sidebar() {
  return (
    <div className="skeleton-sidebar">
      <div className="item">
        <Skeleton type="triangle" width="50px" height="50px" />
        <Skeleton type="text" width="30%" height="12px" />
      </div>
      <div className="item">
        <Skeleton type="icon" width="50px" height="50px" />
        <Skeleton type="text" width="100%" height="12px" />
      </div>
      <div className="item">
        <Skeleton type="circle" width="50px" height="50px" />
        <Skeleton type="text" width="60%" height="12px" />
      </div>
      <div className="item">
        <Skeleton type="icon" width="50px" height="50px" />
        <Skeleton type="text" width="100%" height="12px" />
      </div>
      <div className="item">
        <Skeleton type="diamond" width="50px" height="50px" />
        <Skeleton type="text" width="50%" height="12px" />
      </div>
      <div className="item">
        <Skeleton type="icon" width="50px" height="50px" />
        <Skeleton type="text" width="70%" height="12px" />
      </div>
    </div>
  );
}

export { Sidebar };
