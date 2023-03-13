import { forwardRef, LabelHTMLAttributes } from 'react';

export interface LabelIProps extends LabelHTMLAttributes<HTMLLabelElement> {}
const Label = forwardRef<HTMLLabelElement, LabelIProps>(
  ({ className, ...props }: LabelIProps, ref) => {
    return (
      <label
        className={
          'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ' +
          className
        }
        ref={ref}
        {...props}
      />
    );
  }
);
Label.displayName = 'Label';

export { Label };
