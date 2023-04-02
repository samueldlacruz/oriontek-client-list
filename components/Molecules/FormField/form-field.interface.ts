import { InputPropsI } from '../../Atoms/Input/input.interface'

export interface FormFieldI extends InputPropsI {
	label?: string
	error?: string
	containerClassName?: string
}
