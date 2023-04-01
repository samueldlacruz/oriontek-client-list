import { PaginationI } from '../../Atoms/Pagination/pagination.interface'
import { TableI } from '../../Atoms/Table/table.interface'

export interface DataTableI extends TableI {
	pagination?: Partial<PaginationI>
}
