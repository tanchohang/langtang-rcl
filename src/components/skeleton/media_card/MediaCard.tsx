import { Avatar } from '../avatar/Avatar';
import { Image } from '../image/Image';
import Skeleton from '../skeleton';
import './style.scss';

interface MediaCardIProps {
  auth: boolean;
  icons: boolean;
}

function MediaCard({ auth, icons }: MediaCardIProps) {
  return (
    <div className="skeleton_card">
      <header>
        {auth && <Avatar height="150px" width="150px" />}

        <div className="always">
          <div className="title">
            <Skeleton type="title" />
            <Skeleton type="text" height="12px" width="70%" />
          </div>
          <div className="menu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>
      <div className="content">
        <Skeleton type="text" height="12px" width="100%" />
        <Skeleton type="text" height="12px" width="70%" />

        <Image width="100%" height="100%" />
        <Skeleton type="text" height="12px" width="100%" />
        <Skeleton type="text" height="12px" width="100%" />
        <Skeleton type="text" height="12px" width="70%" />
      </div>
      <footer>
        {icons && (
          <div className="icons">
            <i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M14.6 8H21a2 2 0 0 1 2 2v2.104a2 2 0 0 1-.15.762l-3.095 7.515a1 1 0 0 1-.925.619H2a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1h3.482a1 1 0 0 0 .817-.423L11.752.85a.5.5 0 0 1 .632-.159l1.814.907a2.5 2.5 0 0 1 1.305 2.853L14.6 8zM7 10.588V19h11.16L21 12.104V10h-6.4a2 2 0 0 1-1.938-2.493l.903-3.548a.5.5 0 0 0-.261-.571l-.661-.33-4.71 6.672c-.25.354-.57.644-.933.858zM5 11H3v8h2v-8z" />
              </svg>
            </i>
            <i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455zm-.692-2H20V5H4v13.385L5.763 17zM11 10h2v2h-2v-2zm-4 0h2v2H7v-2zm8 0h2v2h-2v-2z" />
              </svg>
            </i>
            <i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455zM4 18.385L5.763 17H20V5H4v13.385zM13 11v4h-2v-4H8l4-4 4 4h-3z" />
              </svg>
            </i>
          </div>
        )}
      </footer>
    </div>
  );
}

export { MediaCard };
