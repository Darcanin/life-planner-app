import { useState } from 'react'

interface IDaily {
	id: number
	title: string
	description: string | null
	createdDate: string
	closedDate: string | null
}

const Daily = () => {
	const [title, setTitle] = useState<string>('')
	const [dailyList, setDailyList] = useState<IDaily[]>([])

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const newDaily = {
			id: new Date().getTime(),
			title: title,
			description: null,
			createdDate: new Date().toISOString(),
			closedDate: null,
		}
		setDailyList([...dailyList, newDaily])

		console.log('submit')
		console.log(dailyList)
		setTitle('')
	}

	return (
		<div className='flex flex-col gap-4 p-4'>
			<form action='#' onSubmit={onSubmit} className='flex align-center'>
				<input
					className='border border-gray-300 p-2 m-2'
					type='text'
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<button type='submit'>Создать Daily</button>
			</form>
			<div className='flex flex-col gap-2'>
				{dailyList.map((daily) => (
					<div
						key={daily.id}
						className='border border-gray-500 p-2 rounded'
					>
						<span>{daily.title}</span>
					</div>
				))}
			</div>
		</div>
	)
}

export default Daily
