import { useState } from 'react'
import dailyState from './State'
import DailyTask from './DailyTask'

const Daily = () => {
	const [search, setSearch] = useState<string>('')
	const [title, setTitle] = useState<string>('')

	const dailyList = dailyState((state) => state.daily)
	const create = dailyState((state) => state.create)

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		create({
			id: new Date().getTime(),
			title: title,
			description: null,
			createdDate: new Date().toISOString(),
			closedDate: null,
		})

		setTitle('')
	}

	const outDaily = dailyList.map((daily) => {
		if (
			daily.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
		) {
			return <DailyTask key={daily.id} daily={daily} />
		}
	})

	return (
		<div className='flex flex-col gap-4 p-4'>
			<div className='daily-header flex flex-row justify-between items-center'>
				<div className=''>
					<input
						className='border-gray-400 p-2 border-2 rounded'
						type='search'
						placeholder='Поиск...'
						value={search}
						onChange={(e) => setSearch(e.target.value)}
					/>
				</div>

				<form
					action='#'
					onSubmit={onSubmit}
					className='flex align-center gap-2 my-2'
				>
					<input
						className='border-gray-400 p-2 border-2 rounded'
						type='text'
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
					<button
						type='submit'
						className='px-3 bg-secondary text-xl rounded-sm text-text'
					>
						Создать Daily
					</button>
				</form>
			</div>
			<div className='flex flex-col gap-2'>{outDaily}</div>
		</div>
	)
}

export default Daily
