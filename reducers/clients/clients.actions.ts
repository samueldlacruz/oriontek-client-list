import { AddressI } from '../../interfaces/Address'
import { ClientI } from '../../interfaces/Client'
import { Types } from './clients.types'

interface AddClientAction {
	type: Types.ADD_CLIENT
	payload: ClientI
}

interface EditClientAction {
	type: Types.EDIT_CLIENT
	payload: ClientI
}

interface DeleteCustomerAction {
	type: Types.DELETE_CLIENT
	payload: string
}

interface AddAddressAction {
	type: Types.ADD_ADDRESS
	payload: {
		clientUuid: string
		address: AddressI
	}
}

interface EditAddressAction {
	type: Types.EDIT_ADDRESS
	payload: {
		clientUuid: string
		addressIndex: number
		address: AddressI
	}
}

interface DeleteAddressAction {
	type: Types.DELETE_ADDRESS
	payload: {
		clientUuid: string
		addressIndex: number
	}
}

export const addClient = (client: ClientI): AddClientAction => ({
	type: Types.ADD_CLIENT,
	payload: client
})

export const editClient = (client: ClientI): EditClientAction => ({
	type: Types.EDIT_CLIENT,
	payload: client
})

export const deleteClient = (clientUuid: string): DeleteCustomerAction => ({
	type: Types.DELETE_CLIENT,
	payload: clientUuid
})

export const addAddress = (clientUuid: string, address: AddressI): AddAddressAction => ({
	type: Types.ADD_ADDRESS,
	payload: {
		clientUuid,
		address
	}
})

export const editAddress = (clientUuid: string, addressIndex: number, address: AddressI): EditAddressAction => ({
	type: Types.EDIT_ADDRESS,
	payload: {
		clientUuid,
		addressIndex,
		address
	}
})

export const deleteAddress = (clientUuid: string, addressIndex: number): DeleteAddressAction => ({
	type: Types.DELETE_ADDRESS,
	payload: {
		clientUuid,
		addressIndex
	}
})
