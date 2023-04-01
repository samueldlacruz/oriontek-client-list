import { useCallback, useState } from 'react'
import { DataTableI } from './data-table.interface'
import Pagination from '../../Atoms/Pagination'
import Table from '../../Atoms/Table'

const DataTable = ({ columns, data, keyIdentifier, pagination }: DataTableI) => {
	const [currentPage, setCurrentPage] = useState(pagination?.currentPage || 1)
	const itemsPerPage = pagination?.rowsPerPage || 5

	const indexOfLastItem = currentPage * itemsPerPage
	const indexOfFirstItem = indexOfLastItem - itemsPerPage
	const currentItems = data.slice(indexOfFirstItem, indexOfLastItem)

	const handleChangePage = useCallback(
		(page: number) => {
			if (pagination?.setCurrentPage) {
				pagination?.setCurrentPage(page)
			} else {
				setCurrentPage(page)
			}
		},
		[pagination?.setCurrentPage, setCurrentPage]
	)

	return (
		<div className="overflow-x-auto">
			<Table columns={columns} data={currentItems} keyIdentifier={keyIdentifier} />
			<div className="flex justify-end items-end">
				<Pagination
					currentPage={currentPage}
					rowsPerPage={itemsPerPage}
					totalRows={data.length}
					setCurrentPage={handleChangePage}
				/>
			</div>
		</div>
	)
}

export default DataTable
