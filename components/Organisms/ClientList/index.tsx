import { useState } from 'react'
import { ClientI } from '../../../interfaces/Client'
import Card from '../../Atoms/Card'
import DataTable from '../../Molecules/DataTable'
import Search from '../../Molecules/Search'
import AddAccount from '../AddAccount'
import ColumnsClientTable from './columns'
import { deleteClient } from '../../../reducers/clients/clients.actions'
import useClientContext from '../../../context/clients/useClients'
import EditAccountModal from '../EditAccountModal'
import AddressesModal from '../AddressesModal'
import Swal from 'sweetalert2'

const ClientList = ({ clients }: { clients: Array<ClientI> }) => {
	const { dispatch } = useClientContext()

	const [searchTerm, setSearchTerm] = useState('')
	const [selectClient, setSelectClient] = useState<ClientI>({} as ClientI)
	const [showEditAccountModal, setShowEditAccountModal] = useState(false)
	const [showAddressesModal, setShowAddressesModal] = useState(false)

	const filteredClients = clients.filter((client) => {
		const values = Object.values(client).join(' ').toLowerCase()
		return values.includes(searchTerm.toLowerCase())
	})

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value)
	}

	const handleDeleteClient = (clientUuid: string) => {
		Swal.fire({
			icon: 'question',
			text: `Are you sure you want to delete this client?`,
			showCancelButton: true
		}).then(({ isConfirmed }) => {
			if (isConfirmed) {
				dispatch(deleteClient(clientUuid))

				Swal.fire({
					title: 'Remove Account',
					text: 'Account removed successfully',
					icon: 'success',
					timer: 5000
				})
			}
		})
	}

	const handleColumnClick = (action: string, value?: any) => {
		const actions: { [key: string]: () => void } = {
			remove: () => handleDeleteClient(value),
			showAddresses: () => [setShowAddressesModal(true), setSelectClient(value)],
			edit: () => [setShowEditAccountModal(true), setSelectClient(value)]
		}

		if (actions[action]) actions[action]()
	}

	return (
		<section className="mt-4 mx-5">
			<AddAccount />

			<Card Title="Clients">
				<div className="ml-2 w-64">
					<Search value={searchTerm} placeholder="Search client" onChange={handleInputChange} />
				</div>
				<div className="mt-3 px-2 pb-4">
					<ColumnsClientTable handleColumnClick={handleColumnClick}>
						{({ columns }) => (
							<DataTable
								keyIdentifier="client-table"
								data={filteredClients}
								columns={columns}
								pagination={{ rowsPerPage: 8 }}
							/>
						)}
					</ColumnsClientTable>
				</div>
			</Card>
			{showEditAccountModal && (
				<EditAccountModal
					client={selectClient}
					isOpen={showEditAccountModal}
					handleClose={() => setShowEditAccountModal(false)}
				/>
			)}
			{showAddressesModal && (
				<AddressesModal
					client={selectClient}
					isOpen={showAddressesModal}
					handleClose={() => setShowAddressesModal(false)}
				/>
			)}
		</section>
	)
}

export default ClientList
