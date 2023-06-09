import { TableI } from './table.interface'

const Table = ({ columns, data, keyIdentifier }: TableI) => {
	return (
		<table className="table-auto border border-gray-300 w-full">
			<thead className="text-xs border-b border-gray-300 font-semibold capitalize text-gray-600 bg-gray-100">
				<tr>
					{columns.map((column) => (
						<th key={`${keyIdentifier}-${column.key}-th`} className="p-2">
							{column.header && typeof column.header === 'string' ? (
								<div className="font-semibold text-left">{column.header}</div>
							) : (
								column.header
							)}
						</th>
					))}
				</tr>
			</thead>

			<tbody className="text-sm divide-y divide-gray-100">
				{data.length ? (
					data.map((row, rowIndex) => (
						<tr key={`${keyIdentifier}-${rowIndex}-tr`}>
							{columns.map((column) => (
								<td key={`${column.key}-td`} className="p-2">
									{typeof column?.renderColumn == 'function'
										? column.renderColumn({ row, data })
										: row[column?.key || '']}
								</td>
							))}
						</tr>
					))
				) : (
					<tr>
						<td colSpan={columns.length} className="py-14 text-center">
							<span className="text-xl font-medium">No entries</span>
						</td>
					</tr>
				)}
			</tbody>
		</table>
	)
}

export default Table
