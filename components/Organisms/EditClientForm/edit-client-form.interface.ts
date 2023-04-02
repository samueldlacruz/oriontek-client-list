import { ClientI } from '../../../interfaces/Client'

export interface EditClientFormProps {
	client: ClientI
	onSubmit: (data: any) => void
}

export type FormData = {
	firstName: string
	lastName: string
	email: string
	phone: string
	country: string
}
