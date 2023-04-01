import { useState } from 'react'
import Button from '../components/Atoms/Button'
import Card from '../components/Atoms/Card'
import Layout from '../components/Layout'
import Modal from '../components/Atoms/Modal'

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
			<section className="p-4 mx-5">
				<div className="flex justify-end items-end">
					<Button onClick={handleClickNewClient}>New Client</Button>
				</div>
				<Card Title="Clients">content</Card>

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
