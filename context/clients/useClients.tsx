import { useContext } from 'react'
import { ClientContext, ClientContextType } from './clients.context'

const useClientContext = (): ClientContextType => useContext(ClientContext)

export default useClientContext
