import Layout from '../components/Layout'
import ClientList from '../components/Organisms/ClientList'
import useClientContext from '../context/clients/useClients'

const IndexPage = () => {
	const {
		state: { clients }
	} = useClientContext()

	return (
		<Layout title="Client List">
			<ClientList clients={clients} />
		</Layout>
	)
}

export default IndexPage
