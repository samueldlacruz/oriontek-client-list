import { useCallback } from 'react'
import { PaginationI } from './pagination.interface'

const Pagination = ({ currentPage, totalRows, rowsPerPage, setCurrentPage }: PaginationI) => {
	const totalPages = Math.ceil(totalRows / rowsPerPage)
	const pages = []
	for (let i = 1; i <= totalPages; i++) {
		pages.push(i)
	}

	const maxVisiblePages = 4
	const halfVisiblePages = Math.floor(maxVisiblePages / 2)
	const startPage = currentPage - halfVisiblePages
	const endPage = currentPage + halfVisiblePages

	let visiblePages = pages.filter((page) => page >= startPage && page <= endPage)

	if (visiblePages.length < maxVisiblePages) {
		visiblePages = pages.slice(-maxVisiblePages)
	}

	const handleClick = useCallback(
		(page: number) => {
			setCurrentPage(page)
		},
		[setCurrentPage]
	)

	const handlePrevClick = useCallback(() => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1)
		}
	}, [currentPage, setCurrentPage])

	const handleNextClick = useCallback(() => {
		if (currentPage < totalPages) {
			setCurrentPage(currentPage + 1)
		}
	}, [currentPage, setCurrentPage])

	return (
		<div className="flex justify-center mt-4">
			<nav>
				<ul className="flex items-center">
					<li>
						<button
							className="bg-gray-200 hover:bg-gray-300 text-gray-600 py-2 px-4 rounded-l"
							onClick={handlePrevClick}
							disabled={currentPage === 1}
						>
							Prev
						</button>
					</li>
					{visiblePages.map((page) => (
						<li key={page}>
							<button
								className={`bg-gray-200 hover:bg-gray-300 text-gray-600 py-2 px-4 ${
									currentPage === page ? 'font-bold' : ''
								}`}
								onClick={() => handleClick(page)}
							>
								{page}
							</button>
						</li>
					))}
					<li>
						<button
							className="bg-gray-200 hover:bg-gray-300 text-gray-600 py-2 px-4 rounded-r"
							onClick={handleNextClick}
							disabled={currentPage === totalPages}
						>
							Next
						</button>
					</li>
				</ul>
			</nav>
		</div>
	)
}
export default Pagination
