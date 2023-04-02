import React, { useCallback, useState } from 'react'
import Button from '../../Atoms/Button'
import FormField from '../../Molecules/FormField'
import Modal from '../../Atoms/Modal'
import AddressForm from '../AddAddressForm'
import { NewClientFormProps } from './new-client-form.interface'
import { ClientI } from '../../../interfaces/Client'

const NewCLientForm = ({ onSubmit }: NewClientFormProps) => {
	const [showAddAddressModal, setShowAddAddressModal] = useState(false)
	const [formData, setFormData] = useState<ClientI>({
		firstName: '',
		lastName: '',
		email: '',
		country: '',
		phone: ''
	})

	const handleInputChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			const { name, value } = event.target
			setFormData((prevFormData) => ({
				...prevFormData,
				[name]: value
			}))
		},
		[setFormData]
	)

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		onSubmit(formData)
	}

	return (
		<>
			<form onSubmit={handleSubmit} className="px-5 py-5">
				<div className="overflow-auto grid grid-cols-2 gap-5">
					<FormField
						label="First Name"
						name="firstName"
						type="text"
						value={formData.firstName}
						onChange={handleInputChange}
					/>
					<FormField
						label="Last Name"
						name="lastName"
						type="text"
						value={formData.lastName}
						onChange={handleInputChange}
					/>
					<FormField label="Email" name="email" type="email" value={formData.email} onChange={handleInputChange} />
					<FormField label="Phone" name="phone" type="tel" value={formData.phone} onChange={handleInputChange} />
					<FormField
						label="Country"
						containerClassName="col-span-2"
						name="country"
						type="select"
						value={formData.country}
						onChange={handleInputChange}
					/>
				</div>
				<div className="mb-4 flex justify-end items-end">
					<Button onClick={() => setShowAddAddressModal(true)}>Add Address</Button>
				</div>
				<div className="col-span-2">
					<Button className="w-full">Create</Button>
				</div>
			</form>
			{showAddAddressModal && (
				<Modal isOpen={showAddAddressModal} onClose={() => setShowAddAddressModal(false)}>
					<AddressForm onAddAddress={() => {}} />
				</Modal>
			)}
		</>
	)
}

export default NewCLientForm
