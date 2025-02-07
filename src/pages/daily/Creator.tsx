import { useState } from 'react'
import dailyState from './State'

const Creator = () => {
	const [title, setTitle] = useState<string>('')
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

	return (
		<form
			action='#'
			onSubmit={onSubmit}
			className='flex align-center gap-2'
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
	)
}

export default Creator
