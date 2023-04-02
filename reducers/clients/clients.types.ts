import { ClientI } from '../../interfaces/Client'

export enum Types {
	SET_CLIENTS = 'SET_CLIENTS',
	ADD_CLIENT = 'ADD_CLIENT',
	EDIT_CLIENT = 'EDIT_CLIENT',
	DELETE_CLIENT = 'DELETE_CLIENT',
	ADD_ADDRESS = 'ADD_ADDRESS',
	EDIT_ADDRESS = 'EDIT_ADDRESS',
	DELETE_ADDRESS = 'DELETE_ADDRESS'
}

export interface ClientAction {
	type: Types
	payload: any
}

export interface ClientState {
	clients: ClientI[]
}
