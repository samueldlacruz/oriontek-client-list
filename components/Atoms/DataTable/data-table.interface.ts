import { ReactNode } from 'react'

export interface RenderColumnI {
	(params: { row: unknown; data: unknown | Array<unknown> }): ReactNode
}

export interface DataTableI {
	keyIdentifier: string
	columns: Array<DataTableColumnI>
	data: Array<any>
}

export interface DataTableColumnI {
	key: string
	header: string | ReactNode
	renderColumn?: RenderColumnI | ReactNode
}
