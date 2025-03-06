import { useState } from 'react'
import { DataBase } from '../../config/DataBase'
import { IToDoTask } from '../todo/types'

export const HomePage = () => {
	const [todos, setTodos] = useState<IToDoTask[]>([])
	DataBase.db
		?.select<IToDoTask[]>(
			`
			SELECT * 
			FROM TodoTasks
			WHERE finish_date IS NOT NULL
			AND closed_date IS NULL
			ORDER BY finish_date ASC
			LIMIT 4
		`
		)
		.then((data) => {
			setTodos(data)
		})
		.catch((err) => {
			console.error(err)
		})

	const [posts, setPosts] = useState([])

	const fetchData = async () => {
		const response = await fetch('https://jsonplaceholder.typicode.com/posts')
		const data = await response.json()
		setPosts(data)
	}

	const calcTime = (date: string) => {
		const diff = new Date(date).getTime() - new Date().getTime()

		const days = Math.floor(diff / (1000 * 60 * 60 * 24))
		const hours = Math.floor(
			(diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
		)
		const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))

		if (diff > 0) {
			return `Осталось: ${days}д ${String(hours).padStart(2, '0')}:${String(
				minutes
			).padStart(2, '0')}`
		}
		return `Просрочена: ${Math.abs(days)}д ${String(Math.abs(hours)).padStart(
			2,
			'0'
		)}:${String(Math.abs(minutes)).padStart(2, '0')}`
	}

	return (
		<>
			<div className='rounded m-2 p-2 bg-grey/10 border border-indigo-50/30'>
				<span className='text-amber-400 font-bold'>Горящие ToDo-шки:</span>
				<div className='flex flex-col gap-1 mt-2'>
					{todos.map((todo: IToDoTask) => {
						return (
							<div
								key={todo.id}
								className='flex items-center gap-2 justify-between p-2 bg-grey/80 rounded'
							>
								<span>{todo.title}</span>
								<span>{calcTime(todo.finish_date ?? '')}</span>
							</div>
						)
					})}
				</div>
			</div>
			<div className='mt-5 p-2 bg-grey/10 rounded'>
				<h2>Чепушня:</h2>
				<button type='button' className='button-type1' onClick={fetchData}>
					Загрузить чипушню!
				</button>
				<ul className='p-4 flex flex-col gap-1'>
					{posts?.map((post: any) => (
						<li
							key={post.id}
							className='px-3 py-2 rounded bg-grey hover:bg-secondary/30'
						>
							{post.title}
						</li>
					))}
				</ul>
			</div>
		</>
	)
}
