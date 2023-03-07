import { SimpleAvatar } from '../../avatar/Simple/SimpleAvatar';
import './style.scss';

export interface ISimpleCardProps {
  imageUrl: string;
  title: string;
  description: string;
  userImgUrl: string;
  auth: boolean;
}

interface FooterProps {
  date: string;
  likes: number;
  comments: number;
}

interface BodyProps {
  title: string;
  description: string;
}

interface HeaderProps {
  imgUrl: string;
}

const SimpleCard = ({
  imageUrl,
  title,
  description,
  userImgUrl,
  auth,
}: ISimpleCardProps) => {
  return (
    <div className="simple_card">
      <Header imgUrl={imageUrl} />
      {auth && <SimpleAvatar userImgUrl={userImgUrl} width={60} height={60} />}

      <section>
        <Body title={title} description={description} />
        <Footer
          likes={20}
          comments={10}
          date={new Date(Date.now()).toDateString()}
        />
      </section>
    </div>
  );
};

const Header = ({ imgUrl }: HeaderProps) => {
  return (
    <div
      className="simple_card_header"
      style={{ backgroundImage: `url(${imgUrl})` }}
    ></div>
  );
};

const Body = ({ title, description }: BodyProps) => {
  return (
    <div className="simple_card_body">
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

const Footer = ({ likes, comments, date }: FooterProps) => {
  return (
    <div className="simple_card_footer">
      <div className="icons">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="16"
          height="16"
        >
          <path fill="none" d="M0 0H24V24H0z" />
          <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228z" />
        </svg>
        <span>{likes}</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="16"
          height="16"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455zm-.692-2H20V5H4v13.385L5.763 17zM11 10h2v2h-2v-2zm-4 0h2v2H7v-2zm8 0h2v2h-2v-2z" />
        </svg>

        <span>{comments}</span>
      </div>

      <div>
        <span>{date}</span>
      </div>
    </div>
  );
};

export { SimpleCard };
