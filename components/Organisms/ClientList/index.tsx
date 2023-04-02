import Card from '../../Atoms/Card'
import DataTable from '../../Molecules/DataTable'
import Search from '../../Molecules/Search'
import AddAccount from '../AddAccount'
import ColumnsClientTable from './columns'

const ClientList = ({ clients }: { clients: Array<any> }) => {
	return (
		<section className="mt-4 mx-5">
			<AddAccount />

			<Card Title="Clients">
				<div className="ml-2 w-64">
					<Search placeholder="Search client" onChange={() => {}} />
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
		</section>
	)
}

export default ClientList
