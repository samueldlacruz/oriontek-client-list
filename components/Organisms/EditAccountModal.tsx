import Swal from 'sweetalert2'
import useClientContext from '../../context/clients/useClients'
import { ClientI } from '../../interfaces/Client'
import { editClient } from '../../reducers/clients/clients.actions'
import Modal from '../Atoms/Modal'
import EditCLientForm from './EditClientForm'

const EditAccountModal = ({ isOpen, handleClose, client }: { isOpen: boolean; handleClose: () => void; client: ClientI }) => {
	const { dispatch } = useClientContext()

	const handleEditClient = (payload: FormData) => {
		dispatch(editClient({ ...client, ...payload }))
		handleClose()
		Swal.fire({
			title: 'Edit Account',
			text: 'Account updated successfully',
			icon: 'success',
			timer: 5000
		})
	}

	return (
		<>
			{isOpen && (
				<Modal isOpen={isOpen} customClassNames={{ modal: '!max-w-2xl' }} onClose={handleClose}>
					{({ close }) => (
						<div className="w-full">
							<div className="border-b border-gray-300 px-4 justify-between flex items-center">
								<h1 className="font-semibold text-xl py-2">Edit client</h1>
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

							<EditCLientForm client={client} onSubmit={handleEditClient} />
						</div>
					)}
				</Modal>
			)}
		</>
	)
}

export default EditAccountModal
