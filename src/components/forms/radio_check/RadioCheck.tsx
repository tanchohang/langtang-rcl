import './style.scss';
export interface RadioCheckIProps {
  name: string;
  label: string;
  type: 'checkbox' | 'radio';
}
const RadioCheck = ({ name, label, type, ...props }: RadioCheckIProps) => {
  return (
    <>
      <input name={name} type={type} {...props} />
    </>
  );
};
export { RadioCheck };
