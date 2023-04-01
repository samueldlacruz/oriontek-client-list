import { DataTableI } from './data-table.interface'

const DataTable = ({ columns, data, keyIdentifier }: DataTableI) => {
	return (
		<div className="overflow-x-auto">
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
					{data.map((row, rowIndex) => (
						<tr key={`${keyIdentifier}-${rowIndex}-tr`}>
							{columns.map((column) => (
								<td key={`${column.key}-td`} className="p-2">
									{typeof column?.renderColumn == 'function'
										? column.renderColumn({ row, data })
										: row[column?.key || '']}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default DataTable
