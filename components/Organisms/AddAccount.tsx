import React, { useState } from 'react'
import NewCLientForm from './NewClientForm'
import Button from '../Atoms/Button'
import Modal from '../Atoms/Modal'

const AddAccount = () => {
	const [showNewAccountModal, setShowNewAccountModal] = useState(false)

	const handleClickNewClient = () => {
		setShowNewAccountModal(true)
	}

	const handleCloseNewAccountModal = () => {
		setShowNewAccountModal(false)
	}

	return (
		<>
			<div className="flex justify-end items-end">
				<Button onClick={handleClickNewClient}>New Client</Button>
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

							<NewCLientForm onSubmit={() => {}} />
						</div>
					)}
				</Modal>
			)}
		</>
	)
}

export default AddAccount
