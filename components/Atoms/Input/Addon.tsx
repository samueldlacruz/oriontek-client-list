import { InputAddonI } from './input.interface'

export const InputAddon = (props: InputAddonI) => {
	let positionClassName = props.position === 'left' ? 'left-4' : 'right-4'

	return (
		<>
			{props?.iconClassName ? (
				<i className={props.iconClassName}></i>
			) : props.src ? (
				<img
					src={props.src}
					className={`absolute ${positionClassName} top-0 bottom-0 mt-auto mb-auto`}
					alt="input addon icon"
					height={14}
					width={14}
				/>
			) : null}
		</>
	)
}
