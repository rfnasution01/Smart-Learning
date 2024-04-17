import { cva } from 'class-variance-authority'

const variant = {
  default: [
    'bg-white',
    'border-transparent',
    'text-black',
    'hover:bg-slate-300',
    'hover:border-button-outline-hover-border',
    'hover:text-button-outline-hover-text',
    'disabled:text-black',
    'border',
  ],
  outline: [
    'bg-button-outline-background',
    'border-button-outline-border',
    'text-button-outline-text',
    'hover:bg-button-outline-hover-background',
    'hover:border-button-outline-hover-border',
    'hover:text-button-outline-hover-text',
    'active:bg-button-outline-active-background',
    'active:border-button-outline-active-border',
    'active:text-button-outline-active-text',
    'focus:ring',
    'focus:button-primary-background-',
    'disabled:bg-button-outline-disabled-background',
    'disabled:border-button-outline-disabled-border',
    'disabled:text-button-outline-disabled-text',
    'border-2',
  ],
  ghost: 'hover:bg-accent hover:text-accent-foreground',
  'solid-primary': [
    'bg-primary',
    'border-primary',
    'text-white',
    'hover:bg-primary-shade-700',
    'hover:border-button-outline-hover-border',
    'hover:text-button-outline-hover-text',
    'disabled:text-black',
    'border',
  ],
  'outlined-primary': [
    'bg-transparent',
    'border-primary',
    'text-primary',
    'hover:bg-slate-300',
    'hover:border-button-outline-hover-border',
    'hover:text-black',
    'disabled:text-black',
    'border',
  ],
  'outlined-white': [
    'bg-transparent',
    'border-white',
    'text-whiite',
    'hover:bg-slate-300',
    'hover:border-button-outline-hover-border',
    'hover:text-black',
    'disabled:text-black',
    'border',
    'rounded-md',
  ],
}

export type ButtonVariants = keyof typeof variant

export const buttonVariants = cva(
  'flex items-center justify-center gap-8 p-8 leading-medium transition-all ease-in disabled:cursor-not-allowed disabled:bg-slate-300  disabled:text-typography-disabled disabled:border-slate-300 disabled:shadow-disabled',
  {
    variants: {
      variant: variant,
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)
