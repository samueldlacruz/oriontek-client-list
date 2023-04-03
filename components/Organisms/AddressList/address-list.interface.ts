import { ReactElement } from 'react'
import { TableColumnI } from '../../Atoms/Table/table.interface'
import { AddressI } from '../../../interfaces/Address'

export interface ColumnsAddressesTableI {
	handleColumnClick: (action: string, value: any) => void
	children: ColumnsAddressesTableChildrenI
}

export interface ColumnsAddressesTableChildrenI {
	(props: { columns: TableColumnI[] }): ReactElement
}

export interface AddressListI {
	addresses: Array<AddressI>
	clientUUid: string
	onEditAddress?: (address: AddressI) => void
}
