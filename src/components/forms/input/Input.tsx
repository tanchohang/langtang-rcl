import './style.scss';

export interface ImputIProps {
  name: string;
  label: string;
  type: string;
  size: 'sm' | 'md' | 'lg';
}

const Input = ({ name, label, size, ...props }: ImputIProps) => {
  const height = new Map([
    ['sm', 1.3],
    ['md', 1.5],
    ['lg', 1.8],
  ]);
  return (
    <div className="input">
      <label
        htmlFor={name}
        style={{
          fontSize: `${height.get(size)}rem`,
        }}
      >
        {label}:
      </label>
      <input
        name={name}
        {...props}
        style={{
          fontSize: `${height.get(size)! - 0.3}rem`,
        }}
      />
    </div>
  );
};
export { Input };
