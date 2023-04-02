import { ClientI } from '../../../interfaces/Client'

export interface NewClientFormProps {
	onSubmit: (data: ClientI) => void
}
