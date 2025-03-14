import { useEffect, useState } from 'react'
import { DataBase } from '../../../config/DataBase'
import { ToDoState } from '../ToDoState'
import { IToDoTask } from '../types'
import { ToDoTask } from './ToDoTask'

export const ToDoListHistory = () => {
	const [todos, setTodos] = useState<IToDoTask[]>([])
	const completedTodo = ToDoState((state) => state.completed)
	const options = [{ text: '🔙', fn: completedTodo }]

	// Получение данных
	useEffect(() => {
		getTodos()
	}, [])

	const getTodos = () => {
		if (DataBase.db === null) {
			setTimeout(getTodos, 100)
			return
		}

		DataBase.db
			?.select<IToDoTask[]>(
				`
					SELECT * 
					FROM TodoTasks
					WHERE closed_date IS NOT NULL
					ORDER BY finish_date DESC
				`
			)
			.then((data) => {
				setTodos(data)
			})
			.catch((err) => {
				console.error(err)
			})
	}

	const groupedTasks = [...todos].reduce((acc, task) => {
		console.log(
			`Task: [title: ${task.title} closed_date: ${task.closed_date}]`
		)

		if (!task.closed_date) return acc

		const date = new Date(task.closed_date)
		const day = date.toLocaleDateString()
		const hour = date.getHours().toString().padStart(2, '0')
		const minute = date.getMinutes().toString().padStart(2, '0')
		const key = `${day}, ${hour}:${minute}`

		console.log('key', key)

		if (!acc[key]) {
			acc[key] = []
		}
		acc[key].push(task)
		return acc
	}, {} as Record<string, IToDoTask[]>)

	return (
		<div>
			{Object.entries(groupedTasks).map(([key, tasks]) => (
				<div key={key} className='pt-2'>
					<h2>{key}</h2> <hr />
					<div>
						{tasks.map((task) => (
							<ToDoTask key={task.id} item={task} options={options} />
						))}
					</div>
				</div>
			))}
		</div>
	)
}
