import { ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'

export type ButtonVariant = 'cta' | 'link'

type Props = {
  variant?: ButtonVariant
  children: React.ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ variant = 'cta', children, className, ...props }: Props) {
  const base = 'inline-flex items-center justify-center transition-colors duration-150'
  const variants: Record<ButtonVariant, string> = {
    cta: 'border-2 border-rose-500 bg-rose-500 rounded-full h-12 w-28 text-white text-sm md:text-base lg:text-lg',
    link: 'underline underline-offset-4 text-inherit hover:text-[#E53E3E]'
  }

  return (
    <button className={clsx(base, variants[variant], className)} {...props}>
      {children}
    </button>
  )
}
