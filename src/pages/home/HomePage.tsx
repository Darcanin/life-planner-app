import { useState } from 'react'
import { DataBase } from '../../config/DataBase'
import { IToDoTask } from '../todo/types'
import { Section } from '../../components/layout/Section'
import { playSound } from '../../helpers/playSound'
import { SoundsConfig } from '../../config/SoundsConfig'
import { DateTimeDisplayer } from '../../components/ui/fields/DateTimeDisplayer'

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
		playSound(SoundsConfig.request)
		const response = await fetch('https://jsonplaceholder.typicode.com/posts')
		const data = await response.json()
		setPosts(data)
	}

	return (
		<div className='h-full flex flex-col'>
			<Section className='shrink-0'>
				<span className='text-amber-400 font-bold'>Горящие ToDo-шки:</span>
				<div className='flex flex-col gap-1 mt-2'>
					{todos.map((todo: IToDoTask) => {
						const diff = todo.finish_date
							? new Date(todo.finish_date).getTime() -
							  new Date().getTime()
							: 0

						return (
							<div
								key={todo.id}
								className='flex items-center gap-2 justify-between p-2 bg-grey/80 rounded'
							>
								<span>{todo.title}</span>
								<DateTimeDisplayer date={diff} />
							</div>
						)
					})}
				</div>
			</Section>
			<Section className='grow-1'>
				<h2>Чепушня:</h2>
				<div className='flex flex-row gap-1'>
					<button
						type='button'
						className='button-type1'
						onClick={fetchData}
					>
						Загрузить чипушню!
					</button>
					<button
						type='button'
						className='button-type1'
						onClick={() => setPosts([])}
					>
						Очистить чепушннюююю!
					</button>
				</div>
				<ul className='p-4 flex flex-col gap-1 overflow-auto'>
					{posts?.map((post: any) => (
						<li
							key={post.id}
							className='px-3 py-2 rounded bg-grey hover:bg-secondary/30'
						>
							{post.title}
						</li>
					))}
				</ul>
			</Section>
		</div>
	)
}
