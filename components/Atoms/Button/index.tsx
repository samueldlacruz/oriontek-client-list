import { ButtonI } from './button.interface'

const Button = (props: ButtonI) => {
	const { className, withRounded = true, backgroundColor, color, children, ...restProps } = props

	return (
		<button
			className={`${className} py-2 px-3 text-base font-medium ${color ? `text-${color}` : 'text-white'} ${
				backgroundColor ? `${backgroundColor}` : 'bg-blue-700'
			} ${withRounded ? 'rounded' : ''}`.trim()}
			{...restProps}
		>
			{children}
		</button>
	)
}

export default Button
