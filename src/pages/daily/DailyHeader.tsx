import { useState } from 'react'
import Creator from './Creator'
import Search from './Search'

import { FaRegPlusSquare } from 'react-icons/fa'
import { IoSearch } from 'react-icons/io5'
import { IoColorFilterSharp } from 'react-icons/io5'

const DailyHeader = () => {
	const [option, setOption] = useState<'search' | 'create'>('search')

	return (
		<div className='px-4 py-2 daily-header flex flex-row justify-between items-center bg-zinc-600/15 rounded'>
			<div className='options flex flex-row gap-2'>
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
				<button className='p-2 rounded bg-zinc-800/15'>
					<IoColorFilterSharp size={24} />
				</button>
			</div>
			<div className=''>
				{option === 'create' ? <Creator /> : <Search />}
			</div>
		</div>
	)
}

export default DailyHeader
