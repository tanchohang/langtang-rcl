import './style.scss';
export interface RadioCheckIProps {
  name: string;
  type: 'checkbox' | 'radio' | 'switch';
}
const RadioCheck = ({ name, type, ...props }: RadioCheckIProps) => {
  return (
    <>
      <input className="radio_check" name={name} type={type} {...props} />
    </>
  );
};
export { RadioCheck };
