import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center font-medium transition-all focus:outline-none focus:ring-2 focus:ring-gold-400 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
          {
            'bg-gold-500 text-white hover:bg-gold-600 active:bg-gold-700': variant === 'primary',
            'border border-gold-500 text-gold-700 hover:bg-gold-50 active:bg-gold-100': variant === 'secondary',
            'text-gold-700 hover:text-gold-600 hover:bg-gold-50': variant === 'ghost',
          },
          {
            'text-sm px-3 py-1.5 rounded': size === 'sm',
            'text-sm px-5 py-2.5 rounded-md': size === 'md',
            'text-base px-7 py-3 rounded-md': size === 'lg',
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';
export default Button;
