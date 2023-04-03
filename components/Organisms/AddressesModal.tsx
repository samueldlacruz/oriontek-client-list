import { useState } from 'react'
import useClientContext from '../../context/clients/useClients'
import { AddressI } from '../../interfaces/Address'
import { ClientI } from '../../interfaces/Client'
import { addAddress, editAddress } from '../../reducers/clients/clients.actions'
import Modal from '../Atoms/Modal'
import AddressForm from './AddAddressForm'
import AddressList from './AddressList'
import Swal from 'sweetalert2'

const AddressesModal = ({ isOpen, handleClose, client }: { isOpen: boolean; handleClose: () => void; client: ClientI }) => {
	const {
		dispatch,
		state: { clients }
	} = useClientContext()

	const [selectAddress, setSelectAddress] = useState<AddressI>({} as AddressI)

	const handleAddAddress = (address: AddressI) => {
		if (Object.keys(selectAddress).length) {
			dispatch(editAddress(client.uuid, selectAddress.addressIndex as string, { ...address }))
			setSelectAddress({} as AddressI)
			Swal.fire({
				title: 'Edit Address',
				text: 'Address updated successfully',
				icon: 'success',
				timer: 5000
			})
			return
		}
		dispatch(addAddress(client.uuid, { ...address, addressIndex: crypto.randomUUID() }))
		Swal.fire({
			title: 'Add new Address',
			text: 'new Address added successfully',
			icon: 'success',
			timer: 5000
		})
	}

	const handleEditAddress = (address: AddressI) => {
		setSelectAddress(address)
	}

	const addresses = clients.find((clientItem) => clientItem.uuid === client.uuid)?.addresses

	return (
		<>
			{isOpen && (
				<Modal isOpen={isOpen} customClassNames={{ modal: '!max-w-2xl' }} onClose={handleClose}>
					{({ close }) => (
						<div className="w-full">
							<div className="border-b border-gray-300 px-4 justify-between flex items-center">
								<h1 className="font-semibold text-xl py-2">Addresses</h1>
								<div className="cursor-pointer" onClick={close}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="currentColor"
										className="w-6 h-6"
									>
										<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
									</svg>
								</div>
							</div>

							<AddressForm address={selectAddress} onAddAddress={handleAddAddress} />

							<div className="px-5 py-5 h-64 overflow-auto">
								<AddressList
									onEditAddress={handleEditAddress}
									clientUUid={client.uuid}
									addresses={addresses || []}
								/>
							</div>
						</div>
					)}
				</Modal>
			)}
		</>
	)
}

export default AddressesModal
