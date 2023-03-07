import './style.scss';

export interface IAppProps {}

const FluidAnimatedCard = (props: IAppProps) => {
  return (
    <div className="container">
      <div className="card">fluid</div>
    </div>
  );
};

export { FluidAnimatedCard };
