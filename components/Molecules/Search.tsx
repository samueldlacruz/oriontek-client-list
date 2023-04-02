import React from 'react'
import Input from '../Atoms/Input'

const Search = ({
	placeholder,
	value,
	onChange: handleChange
}: {
	placeholder: string
	value: string
	onChange: (ev: React.ChangeEvent<HTMLInputElement>) => void
}) => {
	return (
		<Input
			type="search"
			value={value}
			addon={{
				position: 'left',
				src: 'svgs/search.svg'
			}}
			onChange={handleChange}
			placeholder={placeholder}
		/>
	)
}

export default Search
