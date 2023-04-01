import { useState } from 'react'
import Button from '../components/Atoms/Button'
import Card from '../components/Atoms/Card'
import Layout from '../components/Layout'
import Modal from '../components/Atoms/Modal'
import DataTable from '../components/Atoms/DataTable'
import Input from '../components/Atoms/Input'

const columns = [
	{ key: 'firstName', header: 'First Name' },
	{ key: 'lastName', header: 'Last Name' },
	{ key: 'email', header: 'Email' },
	{ key: 'phone', header: 'Phone' },
	{ key: 'country', header: 'Country' },
	{ key: 'Addresses', header: 'addresses' },
	{ key: 'actions', header: 'Actions', renderColumn: () => <>Actions button</> }
]

const data = [
	{ name: 'John Doe', email: 'johndoe@example.com', phone: '555-555-5555' },
	{ name: 'Jane Smith', email: 'janesmith@example.com', phone: '555-555-5555' },
	{ name: 'Bob Johnson', email: 'bobjohnson@example.com', phone: '555-555-5555' }
]

const IndexPage = () => {
	const [showNewAccountModal, setShowNewAccountModal] = useState(false)

	const handleClickNewClient = () => {
		setShowNewAccountModal(true)
	}

	const handleCloseNewAccountModal = () => {
		setShowNewAccountModal(false)
	}

	return (
		<Layout title="Client List">
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
					<div className="mt-3">
						<DataTable keyIdentifier="client-table" data={data} columns={columns} />
					</div>
				</Card>

				{showNewAccountModal && (
					<Modal isOpen={showNewAccountModal} onClose={handleCloseNewAccountModal}>
						content form
					</Modal>
				)}
			</section>
		</Layout>
	)
}

export default IndexPage
