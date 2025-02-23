import { IToDoTask } from '../types'
import { ToDoTask } from './ToDoTask'

export const ToDoListHistory = ({ todos }: { todos: IToDoTask[] }) => {
	// Сортируем задачи по дате в обратном порядке
	const sortedTodos = [...todos].sort((a, b) => {
		if (!a.closed_date || !b.closed_date) return 0
		return (
			new Date(b.closed_date).getTime() - new Date(a.closed_date).getTime()
		)
	})

	const groupedTasks = sortedTodos.reduce((acc, task) => {
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
							<ToDoTask key={task.id} item={task} />
						))}
					</div>
				</div>
			))}
		</div>
	)
}
