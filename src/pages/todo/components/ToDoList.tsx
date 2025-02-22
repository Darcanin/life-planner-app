import { IToDoTask } from '../types'
import { ToDoTask } from './ToDoTask'

export const ToDoList = ({ todos }: { todos: IToDoTask[] }) => {
	return (
		<div className='py-3 flex flex-col gap-1'>
			{todos?.map((item) => (
				<ToDoTask key={item.id} item={item} />
			))}
		</div>
	)
}
