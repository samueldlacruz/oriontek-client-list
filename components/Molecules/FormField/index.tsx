import React from 'react'
import Input from '../../Atoms/Input'
import { FormFieldI } from './form-field.interface'

const FormField = ({ label, error, children, containerClassName, ...rest }: FormFieldI) => {
	return (
		<div className={`${containerClassName ? containerClassName : ''} mb-4`}>
			<label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
			{children ? (
				<>{children}</>
			) : (
				<Input
					{...rest}
					className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
						error ? 'border-red-500' : ''
					}`}
				/>
			)}
			{error && <p className="text-red-500 text-xs italic">{error}</p>}
		</div>
	)
}

export default FormField
