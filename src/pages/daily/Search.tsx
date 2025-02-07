import dailyState from './State'

const Search = () => {
	const search = dailyState((state) => state.search)
	const setSearch = dailyState((state) => state.setSearch)

	return (
		<div className=''>
			<input
				className='border-gray-400 p-2 border-2 rounded'
				type='search'
				placeholder='Поиск...'
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
		</div>
	)
}

export default Search
