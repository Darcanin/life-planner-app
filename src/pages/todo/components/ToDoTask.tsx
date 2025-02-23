import { ModalWindowState } from '../../../components/windows/ModalWindowState'
import { ToDoForm } from './ToDoForm'
import { ToDoState } from '../ToDoState'
import { IToDoTask } from '../types'

// interface IToDoTaskProps {
// 	item: IToDoTask
// 	options: [
// 		{ text: '✅'; fn: (id: number) => void },
// 		{ text: '✏️'; fn: (id: number) => void },
// 		{ text: '❌'; fn: (id: number) => void }
// 	]
// }

export const ToDoTask = ({ item }: { item: IToDoTask }) => {
	const deleteTodo = ToDoState((state) => state.delete)
	const completedTodo = ToDoState((state) => state.completed)
	const openModal = ModalWindowState((state) => state.open)

	const onTaskEdit = (id: number) => {
		openModal(<ToDoForm id={id} />)
	}

	return (
		<div key={item.id} className='box-type1'>
			<span>{item.title}</span>
			<div className='box-type1-options'>
				<button type='button' onClick={() => completedTodo(item.id)}>
					✅
				</button>
				<button type='button' onClick={() => onTaskEdit(item.id)}>
					✏️
				</button>
				<button type='button' onClick={() => deleteTodo(item.id)}>
					❌
				</button>
			</div>
		</div>
	)
}
