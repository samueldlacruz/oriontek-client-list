import { useState } from 'react'
import useClientContext from '../../context/clients/useClients'
import { addClient } from '../../reducers/clients/clients.actions'
import Button from '../Atoms/Button'
import Modal from '../Atoms/Modal'
import NewCLientForm from './NewClientForm'
import { FormData } from './NewClientForm/new-client-form.interface'

const AddAccount = () => {
	const { dispatch } = useClientContext()
	const [showNewAccountModal, setShowNewAccountModal] = useState(false)

	const handleShowNewClient = () => {
		setShowNewAccountModal(true)
	}

	const handleCloseNewAccountModal = () => {
		setShowNewAccountModal(false)
	}

	const handleNewClient = (payload: FormData) => {
		dispatch(
			addClient({
				uuid: crypto.randomUUID(),
				addresses: [],
				...payload
			})
		)
		handleCloseNewAccountModal()
	}

	return (
		<>
			<div className="flex justify-end items-end">
				<Button onClick={handleShowNewClient}>New Client</Button>
			</div>

			{showNewAccountModal && (
				<Modal
					isOpen={showNewAccountModal}
					customClassNames={{ modal: '!max-w-2xl' }}
					onClose={handleCloseNewAccountModal}
				>
					{({ close }) => (
						<div className="w-full">
							<div className="border-b border-gray-300 px-4 justify-between flex items-center">
								<h1 className="font-semibold text-xl py-2">New client</h1>
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

							<NewCLientForm onSubmit={handleNewClient} />
						</div>
					)}
				</Modal>
			)}
		</>
	)
}

export default AddAccount
