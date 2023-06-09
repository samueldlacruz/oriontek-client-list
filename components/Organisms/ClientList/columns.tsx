import { countries } from '../../../constants/countries'
import { ClientI } from '../../../interfaces/Client'
import Button from '../../Atoms/Button'
import { TableColumnI } from '../../Atoms/Table/table.interface'
import { ColumnsClientTableI } from './client-list.interface'

const ColumnsClientTable = ({ children, handleColumnClick }: ColumnsClientTableI) => {
	const columns: TableColumnI[] = [
		{ key: 'firstName', header: 'First Name' },
		{ key: 'lastName', header: 'Last Name' },
		{ key: 'email', header: 'Email' },
		{ key: 'phone', header: 'Phone' },
		{
			key: 'country',
			header: 'Country',
			renderColumn: ({ row }: { row: ClientI }) => (
				<div>
					<span>
						{countries[row.country]} <small>({row.country})</small>
					</span>
				</div>
			)
		},
		{
			key: 'Addresses',
			header: 'addresses',
			renderColumn: ({ row }: { row: ClientI }) => (
				<div className="flex w-full justify-center items-center pr-10 text-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						onClick={() => handleColumnClick('showAddresses', row)}
						className="w-6 h-6 cursor-pointer"
					>
						<path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
						/>
					</svg>
				</div>
			)
		},
		{
			key: 'actions',
			header: 'Actions',
			renderColumn: ({ row }: { row: ClientI }) => (
				<div className="flex gap-2">
					<Button className="h-10 px-4" onClick={() => handleColumnClick('edit', row)}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-4 h-4"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
							/>
						</svg>
					</Button>
					<Button backgroundColor="bg-red-700" onClick={() => handleColumnClick('remove', row.uuid)} className="h-10">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-4 h-4"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
							/>
						</svg>
					</Button>
				</div>
			)
		}
	]

	return children({ columns })
}

export default ColumnsClientTable
