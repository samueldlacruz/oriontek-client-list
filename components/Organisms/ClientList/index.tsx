import { useState } from 'react'
import Button from '../../Atoms/Button'
import Card from '../../Atoms/Card'
import Input from '../../Atoms/Input'
import Modal from '../../Atoms/Modal'
import DataTable from '../../Molecules/DataTable'
import ColumnsClientTable from './columns'

const ClientList = ({ clients }: { clients: Array<any> }) => {
	const [showNewAccountModal, setShowNewAccountModal] = useState(false)

	const handleClickNewClient = () => {
		setShowNewAccountModal(true)
	}

	const handleCloseNewAccountModal = () => {
		setShowNewAccountModal(false)
	}

	return (
		<section className="mt-4 mx-5">
			<div className="flex justify-end items-end">
				<Button onClick={handleClickNewClient}>New Client</Button>
			</div>

			<Card Title="Clients">
				<div className="ml-2 w-64">
					<Input
						type="search"
						addon={{
							position: 'left',
							src: 'svgs/search.svg'
						}}
						placeholder="Search a client"
					/>
				</div>
				<div className="mt-3 px-2 pb-4">
					<ColumnsClientTable>
						{({ columns }) => (
							<DataTable
								keyIdentifier="client-table"
								data={clients}
								columns={columns}
								pagination={{ rowsPerPage: 8 }}
							/>
						)}
					</ColumnsClientTable>
				</div>
			</Card>

			{showNewAccountModal && (
				<Modal isOpen={showNewAccountModal} onClose={handleCloseNewAccountModal}>
					content form
				</Modal>
			)}
		</section>
	)
}

export default ClientList
