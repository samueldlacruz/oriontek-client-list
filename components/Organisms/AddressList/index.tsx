import Swal from 'sweetalert2'
import useClientContext from '../../../context/clients/useClients'
import { AddressI } from '../../../interfaces/Address'
import { deleteAddress } from '../../../reducers/clients/clients.actions'
import DataTable from '../../Molecules/DataTable'
import { AddressListI } from './address-list.interface'
import ColumnsAddressTable from './columns'

const AddressList = ({ addresses, clientUUid, onEditAddress }: AddressListI) => {
	const { dispatch } = useClientContext()

	const handleRemoveAddress = (clientUUid: string, addressIndex: string) => {
		Swal.fire({
			icon: 'question',
			text: `Are you sure you want to delete this address?`,
			showCancelButton: true
		}).then(({ isConfirmed }) => {
			if (isConfirmed) {
				dispatch(deleteAddress(clientUUid, addressIndex))
				Swal.fire({
					title: 'Remove Address',
					text: 'Address removed successfully',
					icon: 'success',
					timer: 5000
				})
			}
		})
	}

	const handleColumnClick = (action: string, value?: any) => {
		const actions: { [key: string]: () => void } = {
			remove: () => handleRemoveAddress(clientUUid, value.addressIndex),
			edit: () => onEditAddress && onEditAddress(value as AddressI)
		}
		if (actions[action]) actions[action]()
	}

	return (
		<ColumnsAddressTable handleColumnClick={handleColumnClick}>
			{({ columns }) => (
				<DataTable keyIdentifier="address-table" data={addresses} columns={columns} pagination={{ rowsPerPage: 5 }} />
			)}
		</ColumnsAddressTable>
	)
}

export default AddressList
