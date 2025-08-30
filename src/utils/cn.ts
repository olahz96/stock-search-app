import { twMerge } from 'tailwind-merge'
import { ClassValue, clsx } from 'clsx'

export default (...inputs: ClassValue[]) => twMerge(clsx(inputs))
