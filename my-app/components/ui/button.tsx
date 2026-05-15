import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'green' | 'pink' | 'gray' | 'white' | 'works';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
}

export function Button({
  className,
  children,
  variant = 'works',
  size = 'md',
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      className={cn(
        // 共通スタイル
        'inline-flex w-fit cursor-pointer items-center justify-center rounded-full whitespace-nowrap',
        'transition duration-300 ease-out',
        'focus:outline-none focus:ring-2 focus:ring-offset-2',
        'disabled:cursor-not-allowed disabled:opacity-50',

        // サイズ
        size === 'sm' &&
          'gap-1.5 px-3.5 py-1.5 text-[12px] tracking-[0.08em]',
        size === 'md' &&
          'gap-2 px-5 py-2 text-[13px] tracking-[0.08em]',
        size === 'lg' &&
          'gap-2.5 px-7 py-3 text-[14px] tracking-[0.1em]',

        // variant
        variant === 'green' &&
          'bg-[#2D735C] text-white hover:bg-[#25664D] focus:ring-[#2D735C]',

        variant === 'pink' &&
          'bg-pink-400 text-white hover:bg-pink-500 focus:ring-pink-400',

        variant === 'gray' &&
          'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-300',

        variant === 'white' &&
          'border border-[rgba(0,0,0,0.05)] bg-white text-[#6A5C5C] shadow-[0_4px_10px_rgba(0,0,0,0.08)] hover:bg-[#F5F5F5] hover:shadow-[0_6px_14px_rgba(0,0,0,0.12)] focus:ring-[#E0E0E0]',

        variant === 'works' &&
          'border border-[#D8D1CC] bg-[#FFFDFC] text-[#5F5555] shadow-[0_12px_30px_rgba(95,85,85,0.08)] hover:-translate-y-[1px] hover:border-[#A28686]/50 hover:bg-[#F8F4F2] hover:text-[#A28686] hover:shadow-[0_18px_42px_rgba(95,85,85,0.12)] focus:ring-[#A28686]/30',

        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}