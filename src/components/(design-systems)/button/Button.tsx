'use client';

import { ReactNode } from 'react';
import clsx from 'clsx';
import LoadingIcon from '@/components/ui/LoadingIcon';
import Link from 'next/link';

type Variant =
  | 'default'
  | 'outline'
  | 'primary'
  | 'filled'
  | 'link'
  | 'text'
  | 'danger';

type Radius = 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  radius?: Radius;
  size?: Size;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  isLoading?: boolean;
  children?: ReactNode;
  href?: string;
}

const variantClasses: Record<Variant, string> = {
  default:
    'border border-(--color-primary-500) text-(--color-primary-500) hover:bg-gray-100',
  outline:
    'border border-(--color-gray-100) text-(--color-gray-500) hover:bg-gray-100',
  primary:
    'bg-(--color-primary-500) text-white hover:bg-(--color-primary-400) focus:ring-1',
  filled:
    'bg-(--color-primary-100) text-(--color-primary-500) hover:bg-(--color-primary-200)',
  link: 'text-(--color-primary-500) hover:text-(--color-primary-400)',
  text: 'text-(--color-primary-500) hover:text-(--color-primary-400) hover:bg-(--color-neutral-200)',
  danger: 'bg-(--color-red-500) text-white hover:bg-(--color-red-300)',
};

const radiusClasses: Record<Radius, string> = {
  none: 'rounded-none',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  full: 'rounded-full',
};

const sizeClasses: Record<Size, string> = {
  xs: 'text-xs px-2 py-1',
  sm: 'text-sm px-3 py-1.5',
  md: 'text-base px-4 py-2',
  lg: 'text-lg px-5 py-2.5',
  xl: 'text-xl px-6 py-3',
};

export default function Button({
  variant = 'default',
  radius = 'md',
  size = 'md',
  icon,
  iconPosition = 'left',
  isLoading = false,
  children,
  className,
  disabled,
  href,
  ...props
}: ButtonProps) {
  const isIconOnly = !!icon && !children;

  const classes = clsx(
    'inline-flex items-center justify-center font-medium transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed',
    variantClasses[variant],
    radiusClasses[radius],
    !isIconOnly && sizeClasses[size],
    isIconOnly && 'w-10 h-10 p-0',
    className
  );

  const content = (
    <>
      {isLoading && <LoadingIcon size={18} color="white" />}
      {!isLoading && icon && iconPosition === 'left' && <span>{icon}</span>}
      {children}
      {!isLoading && icon && iconPosition === 'right' && <span>{icon}</span>}
    </>
  );

  if (href) {
    return (
      <Link href={href} target="_blank" className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button {...props} disabled={disabled || isLoading} className={classes}>
      {content}
    </button>
  );
}
