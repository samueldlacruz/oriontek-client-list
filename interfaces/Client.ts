import { AddressI } from './Address'

export interface ClientI {
	firstName: string
	lastName: string
	uuid: string
	email: string
	phone: string
	country: string
	addresses: Array<AddressI>
}
