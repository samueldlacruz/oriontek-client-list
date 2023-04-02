import React, { useCallback, useState } from 'react'
import FormField from '../../Molecules/FormField'
import { AddressI } from '../../../interfaces/Address'
import { AddressFormProps } from './add-address-form.interface'

const AddressForm = ({ onAddAddress }: AddressFormProps) => {
	const [address, setAddress] = useState<AddressI>({
		street: '',
		city: '',
		state: '',
		zip: ''
	})

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

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		onAddAddress(address)
		setAddress({
			street: '',
			city: '',
			state: '',
			zip: ''
		})
	}

	return (
		<form onSubmit={handleSubmit} className="px-5 py-5">
			<div className="grid grid-cols-2 gap-2">
				<FormField
					containerClassName="col-span-1"
					label="Street"
					name="street"
					value={address.street}
					onChange={handleInputChange}
				/>
				<FormField label="City" name="city" value={address.city} onChange={handleInputChange} />
				<FormField label="State" name="state" value={address.state} onChange={handleInputChange} />
				<FormField label="ZIP" name="zip" value={address.zip} onChange={handleInputChange} />
			</div>
			<div className="flex items-end justify-end">
				<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
					Add
				</button>
			</div>
		</form>
	)
}

export default AddressForm
