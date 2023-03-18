import { cva, VariantProps } from 'class-variance-authority';
import { forwardRef, HTMLAttributes, ParamHTMLAttributes } from 'react';

export interface ToastIProps
  extends ParamHTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof toastVariants> {
  message: string;
  title?: string;
  closeHandler: () => void;
  variant: 'success' | 'info' | 'warning' | 'error' | 'subtle';
}

const toastVariants = cva('border-l-4 p-2', {
  variants: {
    variant: {
      success: 'border-green-500',
      info: 'border-blue-500',
      warning: 'border-yellow-500',
      error: 'border-red-500',
      subtle: 'border-slate-500',
    },
  },
  defaultVariants: {
    variant: 'success',
  },
});

const Toast = forwardRef<HTMLParagraphElement, ToastIProps>(
  (
    { className, variant, title, message, closeHandler, ...props }: ToastIProps,
    ref
  ) => {
    return (
      <div className="p-4 rounded-md shadow-lg flex justify-between">
        <p
          className={toastVariants({ variant, className })}
          ref={ref}
          {...props}
        >
          <h5 className="text-lg">{title}</h5>
          <span className="text-gray-500">{message}</span>
        </p>
        <button
          type="button"
          onClick={closeHandler}
          className="hover:text-slate-300 text-red-500 w-5"
        >
          X
        </button>
      </div>
    );
  }
);
export { Toast, toastVariants };
