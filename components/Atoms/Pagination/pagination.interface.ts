export interface PaginationI {
	currentPage: number
	rowsPerPage: number
	totalRows: number
	setCurrentPage: (page: number) => void
}
