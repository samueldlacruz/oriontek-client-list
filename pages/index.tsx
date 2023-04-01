import Button from '../components/Atoms/Button'
import Card from '../components/Atoms/Card'
import Layout from '../components/Layout'

const IndexPage = () => {
	const handleClickNewClient = () => {}

	return (
		<Layout title="Client List">
			<section className="p-4 mx-5">
				<div className="flex justify-end items-end">
					<Button onClick={handleClickNewClient}>New Client</Button>
				</div>
				<Card Title="Clients">content</Card>
			</section>
		</Layout>
	)
}

export default IndexPage
