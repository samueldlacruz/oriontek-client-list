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

const ClientList = ({ clients }: { clients: Array<ClientI> }) => {
	const { dispatch } = useClientContext()

	const [searchTerm, setSearchTerm] = useState('')
	const [selectClient, setSelectClient] = useState<ClientI>({} as ClientI)
	const [showEditAccountModal, setShowEditAccountModal] = useState(false)

	const filteredClients = clients.filter((client) => {
		const values = Object.values(client).join(' ').toLowerCase()
		return values.includes(searchTerm.toLowerCase())
	})

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value)
	}

	const handleDeleteClient = (clientUuid: string) => {
		dispatch(deleteClient(clientUuid))
	}

	const handleColumnClick = (action: string, value?: any) => {
		const actions: { [key: string]: () => void } = {
			remove: () => handleDeleteClient(value),
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
		</section>
	)
}

export default ClientList
