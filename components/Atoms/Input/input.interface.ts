export interface InputPropsI extends Partial<React.InputHTMLAttributes<HTMLInputElement>> {
	addon?: InputAddonI
}
export type InputAddonPositionTypeI = 'left' | 'right'

export interface InputAddonI {
	position: InputAddonPositionTypeI
	iconClassName?: string
	src?: string
}
