import Layout from '../components/Layout'
import ClientList from '../components/Organisms/ClientList'

const data = [
	{ name: 'John Doe', email: 'johndoe@example.com', phone: '555-555-5555' },
	{ name: 'John Doe', email: 'johndoe@example.com', phone: '555-555-5555' },
	{ name: 'John Doe', email: 'johndoe@example.com', phone: '555-555-5555' },
	{ name: 'John Doe', email: 'johndoe@example.com', phone: '555-555-5555' },
	{ name: 'John Doe', email: 'johndoe@example.com', phone: '555-555-5555' },
	{ name: 'John Doe', email: 'johndoe@example.com', phone: '555-555-5555' },
	{ name: 'John Doe', email: 'johndoe@example.com', phone: '555-555-5555' },
	{ name: 'John Doe', email: 'johndoe@example.com', phone: '555-555-5555' },
	{ name: 'John Doe', email: 'johndoe@example.com', phone: '555-555-5555' },
	{ name: 'John Doe', email: 'johndoe@example.com', phone: '555-555-5555' },
	{ name: 'John Doe', email: 'johndoe@example.com', phone: '555-555-5555' },
	{ name: 'John Doe', email: 'johndoe@example.com', phone: '555-555-5555' },
	{ name: 'John Doe', email: 'johndoe@example.com', phone: '555-555-5555' },
	{ name: 'John Doe', email: 'johndoe@example.com', phone: '555-555-5555' },
	{ name: 'John Doe', email: 'johndoe@example.com', phone: '555-555-5555' },
	{ name: 'John Doe', email: 'johndoe@example.com', phone: '555-555-5555' },
	{ name: 'John Doe', email: 'johndoe@example.com', phone: '555-555-5555' },
	{ name: 'John Doe', email: 'johndoe@example.com', phone: '555-555-5555' },
	{ name: 'Jane Smith', email: 'janesmith@example.com', phone: '555-555-5555' },
	{ name: 'Bob Johnson', email: 'bobjohnson@example.com', phone: '555-555-5555' }
]

const IndexPage = () => {
	return (
		<Layout title="Client List">
			<ClientList clients={data} />
		</Layout>
	)
}

export default IndexPage
