import { ReactElement } from 'react'
import { TableColumnI } from '../../Atoms/Table/table.interface'

export interface ColumnsClientTableI {
	children: ColumnsClientTableChildrenI
}

export interface ColumnsClientTableChildrenI {
	(props: { columns: TableColumnI[] }): ReactElement
}
