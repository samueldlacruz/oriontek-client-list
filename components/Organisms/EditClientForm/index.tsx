import React, { useCallback, useState } from 'react'
import { countries } from '../../../constants/countries'
import Button from '../../Atoms/Button'
import FormField from '../../Molecules/FormField'
import { FormData, EditClientFormProps } from './edit-client-form.interface'

const EditCLientForm = ({ onSubmit, client }: EditClientFormProps) => {
	const [formData, setFormData] = useState<FormData>({
		firstName: client.firstName,
		lastName: client.lastName,
		email: client.email,
		country: client.country,
		phone: client.phone
	})

	const [errors, setErrors] = useState<Partial<FormData>>({})

	const handleInputChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
			const { name, value } = event.target
			setFormData((prevFormData) => ({
				...prevFormData,
				[name]: value
			}))
		},
		[setFormData]
	)

	const validateForm = (values: FormData) => {
		const errors: Partial<FormData> = {}
		if (!values.firstName.trim()) {
			errors.firstName = 'First name is required'
		}
		if (!values.lastName.trim()) {
			errors.lastName = 'Last name is required'
		}
		if (!values.email.trim()) {
			errors.email = 'Email is required'
		} else if (!/\S+@\S+\.\S+/.test(values.email)) {
			errors.email = 'Invalid email address'
		}
		if (!values.phone.trim()) {
			errors.phone = 'Phone is required'
		}
		if (!values.country.trim()) {
			errors.country = 'Country is required'
		}
		return errors
	}

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		const formErrors = validateForm(formData)
		if (Object.keys(formErrors).length > 0) {
			setErrors(formErrors)
		} else {
			setErrors({})
			onSubmit(formData)
		}
	}

	return (
		<form onSubmit={handleSubmit} className="px-5 py-5">
			<div className="overflow-auto grid grid-cols-2 gap-5">
				<FormField
					label="First Name"
					name="firstName"
					type="text"
					error={errors.firstName}
					value={formData.firstName}
					onChange={handleInputChange}
				/>
				<FormField
					error={errors.lastName}
					label="Last Name"
					name="lastName"
					type="text"
					value={formData.lastName}
					onChange={handleInputChange}
				/>
				<FormField
					error={errors.email}
					label="Email"
					name="email"
					type="email"
					value={formData.email}
					onChange={handleInputChange}
				/>
				<FormField
					error={errors.phone}
					label="Phone"
					name="phone"
					type="tel"
					value={formData.phone}
					onChange={handleInputChange}
				/>

				<div className="mb-4 col-span-2">
					<label className="block text-gray-700 text-sm font-bold mb-2">Country</label>
					<select
						className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						name="country"
						value={formData.country}
						onChange={handleInputChange}
					>
						{Object.entries(countries).map(([iso, country], index) => (
							<option key={`country-input-${index}`} value={iso}>
								{country}
							</option>
						))}
					</select>
				</div>
			</div>
			<div className="col-span-2">
				<Button type="submit" className="w-full">
					Save
				</Button>
			</div>
		</form>
	)
}

export default EditCLientForm
