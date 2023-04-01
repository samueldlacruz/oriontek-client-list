import React from 'react'
import { InputAddon } from './Addon'
import { InputPropsI } from './input.interface'

const Input = (props: InputPropsI) => {
	const { addon, className, ...restProps } = props

	const WITH_ADDON = Boolean(addon?.iconClassName || addon?.src)

	const inputPaddingClassName = WITH_ADDON ? (addon?.position === 'left' ? 'pl-[3rem]' : 'pr-[3rem]') : ''

	return (
		<div className="flex flex-col w-full">
			<div className="flex w-full relative">
				{WITH_ADDON && addon?.position === 'left' && <InputAddon {...addon} />}

				<div className="w-full">
					<input className={`app-input ${className ? className : ''} ${inputPaddingClassName}`.trim()} {...restProps} />
				</div>

				{WITH_ADDON && addon?.position === 'right' && <InputAddon {...addon} />}
			</div>
		</div>
	)
}
export default Input
