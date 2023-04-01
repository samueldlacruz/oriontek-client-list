import Button from '../components/Atoms/Button'
import Layout from '../components/Layout'

const IndexPage = () => {
	const handleClickNewClient = () => {}

	return (
		<Layout title="Client List">
			<section className="p-4 mx-5">
				<div className="flex justify-end items-end">
					<Button onClick={handleClickNewClient}>New Client</Button>
				</div>

				<div className="mt-4 border border-gray-300 rounded bg-white p-4">
					<h1 className="text-2xl font-bold mb-4">Client List</h1>
					{/* <Table columns={columns} data={data} /> */}
				</div>
			</section>
		</Layout>
	)
}

export default IndexPage
