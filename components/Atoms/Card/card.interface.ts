import { ReactNode } from 'react'

export interface CardI {
	Title?: string | ReactNode
	Footer?: ReactNode
	children: ReactNode
	className?: string
}
