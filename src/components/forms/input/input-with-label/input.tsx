import { forwardRef, InputHTMLAttributes } from 'react';
import { Label } from '../../label/label';
import { Input } from '../default/input';

export interface InputWithLabelIProps extends HTMLDivElement {
  name: string;
  label: string;
}

const InputWithLabel = forwardRef<HTMLDivElement, InputWithLabelIProps>(
  ({ className, name, label, ...props }: InputWithLabelIProps, ref) => {
    return (
      <div>
        <Label htmlFor={name}>{label}</Label>
        <Input id={name} />
      </div>
    );
  }
);

export { InputWithLabel };
