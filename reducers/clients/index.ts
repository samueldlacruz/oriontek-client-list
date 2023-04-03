import { ClientAction, ClientState, Types } from './clients.types'

export const clientsReducer = (state: ClientState, action: ClientAction) => {
	switch (action.type) {
		case Types.SET_CLIENTS:
			const clients = action.payload
			localStorage.setItem('clients', JSON.stringify(clients))
			return { ...state, clients }

		case Types.ADD_CLIENT:
			const newClients = [...state.clients, action.payload]
			localStorage.setItem('clients', JSON.stringify(newClients))
			return { ...state, clients: newClients }

		case Types.EDIT_CLIENT:
			const editedClients = state.clients.map((client) => (client.uuid === action.payload.uuid ? action.payload : client))
			localStorage.setItem('clients', JSON.stringify(editedClients))
			return { ...state, clients: editedClients }

		case Types.DELETE_CLIENT:
			const filteredClients = state.clients.filter((client) => client.uuid !== action.payload)
			localStorage.setItem('clients', JSON.stringify(filteredClients))
			return { ...state, clients: filteredClients }

		case Types.ADD_ADDRESS:
			const addedAddressesClients = state.clients.map((client) =>
				client.uuid === action.payload.clientUuid
					? { ...client, addresses: [...client.addresses, action.payload.address] }
					: client
			)
			localStorage.setItem('clients', JSON.stringify(addedAddressesClients))
			return { ...state, clients: addedAddressesClients }

		case Types.EDIT_ADDRESS:
			const editedAddressesClients = state.clients.map((client) =>
				client.uuid === action.payload.clientUuid
					? {
							...client,
							addresses: client.addresses.map((address) =>
								address.addressIndex === action.payload.addressIndex ? action.payload.address : address
							)
					  }
					: client
			)
			localStorage.setItem('clients', JSON.stringify(editedAddressesClients))
			return { ...state, clients: editedAddressesClients }

		case Types.DELETE_ADDRESS:
			const deletedAddressesClients = state.clients.map((client) =>
				client.uuid === action.payload.clientUuid
					? {
							...client,
							addresses: client.addresses.filter((address) => address.addressIndex !== action.payload.addressIndex)
					  }
					: client
			)
			localStorage.setItem('clients', JSON.stringify(deletedAddressesClients))
			return { ...state, clients: deletedAddressesClients }
		default:
			return state
	}
}
