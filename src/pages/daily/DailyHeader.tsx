import { useState } from 'react'
import Creator from './Creator'
import Search from './Search'

import { FaRegPlusSquare } from 'react-icons/fa'
import { IoSearch } from 'react-icons/io5'
import { IoColorFilterSharp } from 'react-icons/io5'
import { Filters } from './Filters'
import { filterState } from './State'

const DailyHeader = () => {
	const isCompleted = filterState((state) => state.isCompleted)
	const changeIsCompleted = filterState((state) => state.changeIsCompleted)
	const [option, setOption] = useState<'search' | 'create' | 'filter'>(
		'search'
	)

	const content = () => {
		switch (option) {
			case 'search':
				return <Search />
				break
			case 'create':
				return <Creator />
				break
			case 'filter':
				return <Filters />
				break

			default:
				return <></>
				break
		}
	}

	return (
		<div className='px-4 py-2 daily-header flex flex-row justify-between items-center bg-zinc-600/15 rounded'>
			<div className='options flex flex-row gap-2'>
				<button onClick={() => changeIsCompleted(!isCompleted)}>
					{isCompleted ? '✅' : '⭕'}
				</button>
				<button
					className={`p-2 rounded ${
						option === 'create'
							? 'bg-zinc-800/35'
							: 'bg-zinc-800/15'
					}`}
					onClick={() => setOption('create')}
				>
					<FaRegPlusSquare size={24} />
				</button>
				<button
					className={`p-2 rounded ${
						option === 'search'
							? 'bg-zinc-800/35'
							: 'bg-zinc-800/15'
					}`}
					onClick={() => setOption('search')}
				>
					<IoSearch size={24} />
				</button>
				<button
					className={`p-2 rounded ${
						option === 'filter'
							? 'bg-zinc-800/35'
							: 'bg-zinc-800/15'
					}`}
					onClick={() => setOption('filter')}
				>
					<IoColorFilterSharp size={24} />
				</button>
			</div>
			<div className=''>{content()}</div>
		</div>
	)
}

export default DailyHeader
