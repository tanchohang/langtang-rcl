import './style.scss';

export interface ImputIProps {
  name: string;
  label: string;
  type: string;
  size: 'sm' | 'md' | 'lg';
  hasError?: boolean;
  floatingLabel?: boolean;
}

const Input = ({
  name,
  label,
  size,
  hasError,
  floatingLabel,
  ...props
}: ImputIProps) => {
  const height = new Map([
    ['sm', 1.3],
    ['md', 1.5],
    ['lg', 1.8],
  ]);
  return (
    <div className="input">
      {!floatingLabel && (
        <label
          htmlFor={name}
          style={{
            fontSize: `${height.get(size)}rem`,
          }}
        >
          {label}:
        </label>
      )}
      <input
        name={name}
        placeholder={floatingLabel ? label : ''}
        {...props}
        style={{
          fontSize: `${height.get(size)! - 0.3}rem`,
        }}
      />
    </div>
  );
};
export { Input };
