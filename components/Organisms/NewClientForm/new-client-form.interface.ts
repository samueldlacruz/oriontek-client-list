export interface NewClientFormProps {
	onSubmit: (data: FormData) => void
}

export type FormData = {
	firstName: string
	lastName: string
	email: string
	phone: string
	country: string
}
