import { ModalWindowState } from '../../../components/windows/ModalWindowState'
import { SoundsConfig } from '../../../config/SoundsConfig'
import { playSound } from '../../../helpers/playSound'
import { ToDoForm } from './ToDoForm'
import { ToDoState } from '../ToDoState'
import { IToDoTask } from '../types'

export const ToDoTask = ({ item }: { item: IToDoTask }) => {
	const deleteTodo = ToDoState((state) => state.delete)
	const openModal = ModalWindowState((state) => state.open)

	const onTaskComplete = () => {
		playSound(SoundsConfig.minecraft_anvil)
	}

	const onTaskEdit = (id: number) => {
		openModal(<ToDoForm id={id} />)
	}

	return (
		<div key={item.id} className='box-type1'>
			<span>{item.title}</span>
			<div className='box-type1-options'>
				<button type='button' onClick={onTaskComplete}>
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
