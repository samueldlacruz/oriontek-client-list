import React from 'react'
import Input from '../Atoms/Input'

const Search = ({ placeholder, onChange }: { placeholder: string; onChange: (value: string) => void }) => {
	const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
		onChange && onChange(ev.target.value)
	}

	return (
		<Input
			type="search"
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
