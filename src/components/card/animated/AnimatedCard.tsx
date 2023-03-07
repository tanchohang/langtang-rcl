import { SimpleAvatar } from '../../avatar/Simple/SimpleAvatar';
import { Button } from '../../button';
import { Ribbon } from '../../miscellaneous/rank/ribbon/Ribbon';
import './style.scss';
export interface IAnimatedCardProps {
  imgUrl: string;
  title: string;
}

export function AnimatedCard({ imgUrl, title }: IAnimatedCardProps) {
  return (
    <div className="animated_card">
      <article className="ribbon">
        <Ribbon
          backgroundColor="#626262"
          textColor="#fff"
          width={25}
          rank={1}
        />
      </article>
      <section className="original_state">
        <img
          className="main_img"
          src={imgUrl}
          height="200"
          width="150"
          alt={title}
        />
        <h4>{title}</h4>
        <footer>
          <div>
            <i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M4 22a8 8 0 1 1 16 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z" />
              </svg>
              <span>21.4k</span>
            </i>
          </div>
          <div>
            <SimpleAvatar
              userImgUrl="https://source.unsplash.com/p1dtEefClWY/600x300"
              width={30}
              height={30}
            />
          </div>
        </footer>
      </section>
      <section className="hover_state">
        <h4>{title}</h4>
        <div className="stats">
          <span>51.6k</span>
          <span>20k</span>
        </div>
        <div>
          <Button label="see more" />
        </div>
        <div className="users">
          <SimpleAvatar
            userImgUrl="https://source.unsplash.com/p1dtEefClWY/600x300"
            width={40}
            height={40}
          />
          <SimpleAvatar
            userImgUrl="https://source.unsplash.com/p1dtEefClWY/600x300"
            width={40}
            height={40}
          />
          <SimpleAvatar
            userImgUrl="https://source.unsplash.com/p1dtEefClWY/600x300"
            width={40}
            height={40}
          />
        </div>
      </section>

      <section
        className="background"
        style={{ backgroundImage: `url(${imgUrl})` }}
      >
        {/* <img src={imgUrl} alt="" /> */}

        <svg
          stroke-miterlimit="10"
          version="1.1"
          viewBox="100 200 1000 500"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M175.597 210.598C144.375 209.366 113.401 212.965 84.2813 223.691L84.2813 312.379L84.1471 312.379L84.1471 714.598L1116.03 714.598L1116.03 357.272L1116.03 312.379L1116.06 310.673L1116.12 288.944C1028.12 252.845 931.451 241.867 838.885 260.285C789.071 270.31 740.852 288.293 691.175 299.191C620.413 314.726 546.715 315.677 476.064 299.566C407.407 283.948 336.231 245.857 268.389 226.504C238.308 217.919 206.819 211.83 175.597 210.598Z" />
        </svg>
        {/* <div className="overlay">
          <svg
            stroke-miterlimit="10"
            version="1.1"
            viewBox="0 0 1200 1200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M175.597 210.598C144.375 209.366 113.401 212.965 84.2813 223.691L84.2813 312.379L84.1471 312.379L84.1471 714.598L1116.03 714.598L1116.03 357.272L1116.03 312.379L1116.06 310.673L1116.12 288.944C1028.12 252.845 931.451 241.867 838.885 260.285C789.071 270.31 740.852 288.293 691.175 299.191C620.413 314.726 546.715 315.677 476.064 299.566C407.407 283.948 336.231 245.857 268.389 226.504C238.308 217.919 206.819 211.83 175.597 210.598Z"
              stroke-width="1"
            />
          </svg>
        </div> */}
      </section>
    </div>
  );
}
