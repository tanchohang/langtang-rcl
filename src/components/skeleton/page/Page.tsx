import { Card } from '../card/Card';
import { MediaCard } from '../media_card/MediaCard';
import { Sidebar } from '../sidebar/Sidebar';
import Skeleton from '../skeleton';

type PageIProps = {};

const Page = ({}: PageIProps) => {
  return (
    <div className="skeleton_page">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="content">
        <Card auth={true} icons={false} />
        <Card auth={false} icons={true} />

        <MediaCard auth={true} icons={true} />
      </div>
      <aside>
        <Skeleton type="rectangle" height="100px" width="100%" />
        <Skeleton type="rectangle" height="500px" width="100%" />
      </aside>
    </div>
  );
};

export { Page };
