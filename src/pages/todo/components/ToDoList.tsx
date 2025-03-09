import { ModalWindowState } from '../../../components/windows/ModalWindowState'
import { ToDoState } from '../ToDoState'
import { IToDoTask } from '../types'
import { ToDoForm } from './ToDoForm'
import { ToDoTask } from './ToDoTask'

export const ToDoList = ({ todos }: { todos: IToDoTask[] }) => {
	const deleteTodo = ToDoState((state) => state.delete)
	const completedTodo = ToDoState((state) => state.completed)
	const openModal = ModalWindowState((state) => state.open)

	const options = [
		{ text: '✅', fn: completedTodo },
		{
			text: '✏️',
			fn: (id: number) => openModal(<ToDoForm id={id} />),
		},
		{ text: '❌', fn: deleteTodo },
	]

	return (
		<div className='py-3 flex flex-col gap-1 overflow-auto'>
			{todos?.map((item) =>
				item.closed_date ? null : (
					<ToDoTask key={item.id} item={item} options={options} />
				)
			)}
		</div>
	)
}
