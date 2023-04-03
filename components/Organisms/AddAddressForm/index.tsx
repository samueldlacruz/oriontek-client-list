import React, { useCallback, useEffect, useState } from 'react'
import FormField from '../../Molecules/FormField'
import { AddressI } from '../../../interfaces/Address'
import { AddressFormProps } from './add-address-form.interface'

const AddressForm = ({ onAddAddress, address: defaultAddress }: AddressFormProps) => {
	const [address, setAddress] = useState<AddressI>({
		street: '',
		city: '',
		state: '',
		zip: ''
	})

	useEffect(() => {
		if (Object.values(defaultAddress).length === 0) return
		setAddress((prevAddress) => ({
			...prevAddress,
			street: defaultAddress.street,
			city: defaultAddress.city,
			zip: defaultAddress.zip,
			state: defaultAddress.state
		}))
	}, [defaultAddress])
	const [errors, setErrors] = useState<Partial<AddressI>>({})

	const handleInputChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			const { name, value } = event.target
			setAddress((prevAddress) => ({
				...prevAddress,
				[name]: value
			}))
		},
		[setAddress]
	)

	const validateForm = (values: AddressI) => {
		console.log('🚀 ~ file: index.tsx:37 ~ validateForm ~ values:', values)
		const errors: Partial<AddressI> = {}
		if (!values.city.trim()) {
			errors.city = 'City is required'
		}
		if (!values.state.trim()) {
			errors.state = 'State is required'
		}
		if (!values.street.trim()) {
			errors.street = 'Street is required'
		}
		return errors
	}

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		const formErrors = validateForm(address)
		if (Object.keys(formErrors).length > 0) {
			setErrors(formErrors)
		} else {
			setErrors({})
			onAddAddress(address)
			setAddress({
				street: '',
				city: '',
				state: '',
				zip: ''
			})
		}
	}

	return (
		<form onSubmit={handleSubmit} className="px-5 py-5">
			<div className="grid grid-cols-2 gap-2">
				<FormField
					containerClassName="col-span-1"
					label="Street"
					name="street"
					value={address.street}
					error={errors.street}
					onChange={handleInputChange}
				/>
				<FormField error={errors.city} label="City" name="city" value={address.city} onChange={handleInputChange} />
				<FormField error={errors.state} label="State" name="state" value={address.state} onChange={handleInputChange} />
				<FormField label="ZIP" name="zip" value={address.zip} onChange={handleInputChange} />
			</div>
			<div className="flex items-end justify-end">
				<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
					{Object.values(defaultAddress).length ? 'Edit' : 'Add'}
				</button>
			</div>
		</form>
	)
}

export default AddressForm
