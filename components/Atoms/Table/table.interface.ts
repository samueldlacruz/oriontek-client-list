import { ReactNode } from 'react'

export interface RenderColumnI {
	(params: { row: unknown; data: unknown | Array<unknown> }): ReactNode
}

export interface TableI {
	keyIdentifier: string
	columns: Array<TableColumnI>
	data: Array<any>
}

export interface TableColumnI {
	key: string
	header: string | ReactNode
	renderColumn?: RenderColumnI | ReactNode
}
