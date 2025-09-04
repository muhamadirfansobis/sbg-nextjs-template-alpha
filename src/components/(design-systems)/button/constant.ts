export const BUTTON_VARIANT = {
  default:
    'border border-(--color-primary-500) text-(--color-primary-500) hover:bg-gray-100',
  primary:
    'bg-(--color-primary-500) text-white hover:bg-(--color-primary-400) focus:ring-1',
  filled:
    'bg-(--color-primary-100) text-(--color-primary-500) hover:bg-(--color-primary-200)',
  link: 'text-(--color-primary-500) hover:text-(--color-primary-400)',
  text: 'text-(--color-primary-500) hover:text-(--color-primary-400) hover:bg-(--color-neutral-200)',
  danger: 'bg-(--color-red-500) text-white hover:bg-(--color-red-300)',
};

export type VarianKey = keyof typeof BUTTON_VARIANT;
