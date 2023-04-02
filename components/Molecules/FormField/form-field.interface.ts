import { ReactNode } from 'react'
import { InputPropsI } from '../../Atoms/Input/input.interface'

export interface FormFieldI extends InputPropsI {
	label?: string
	children?: ReactNode
	error?: string
	containerClassName?: string
}
