import React, { createContext, useEffect, useLayoutEffect, useReducer } from 'react'
import { ClientAction, ClientState, Types } from '../../reducers/clients/clients.types'
import { clientsReducer } from '../../reducers/clients'

const initialState: ClientState = {
	clients: []
}

export interface ClientContextType {
	state: ClientState
	dispatch: React.Dispatch<ClientAction>
}

export const ClientContext = createContext<ClientContextType>({
	state: initialState,
	dispatch: () => null
})

const useCustomEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect

const ClientProvider = ({ children }: { children: React.ReactNode }) => {
	const [state, dispatch] = useReducer(clientsReducer, initialState)

	useCustomEffect(() => {
		dispatch({
			type: Types.SET_CLIENTS,
			payload: localStorage?.getItem('clients') !== null ? JSON.parse(localStorage?.getItem('clients') as string) : []
		})
	}, [])

	return <ClientContext.Provider value={{ state, dispatch }}>{children}</ClientContext.Provider>
}

export default ClientProvider
