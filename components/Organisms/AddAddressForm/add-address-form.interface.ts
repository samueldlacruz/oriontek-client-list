import { AddressI } from '../../../interfaces/Address'

export interface AddressFormProps {
	address: AddressI
	onAddAddress: (address: AddressI) => void
}
