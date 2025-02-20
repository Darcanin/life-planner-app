import { useEffect } from 'react'
import { ModalWindowState } from '../../components/windows/ModalWindowState'
import { SoundsConfig } from '../../config/SoundsConfig'
import { playSound } from '../../helpers/playSound'
import { ToDoState } from './ToDoState'

export const ToDo = () => {
	const createToDo = ToDoState((state) => state.create)
	const deleteTodo = ToDoState((state) => state.delete)
	const loadDataBase = ToDoState((state) => state.loadDataBase)

	const openModal = ModalWindowState((state) => state.open)
	const todo = ToDoState((state) => state.todos)

	useEffect(() => {
		loadDataBase()
	}, [])

	const onCreateToDo = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const formData = new FormData(e.currentTarget)
		const title = formData.get('title') as string

		createToDo(title)
	}

	const onTaskComplete = () => {
		playSound(SoundsConfig.minecraft_anvil)
	}

	const onTaskEdit = (id: number) => {
		playSound(SoundsConfig.minecraft_open_chest)
		openModal(<div>Редактирование задачи №{id}</div>)
	}

	return (
		<div className='p-4'>
			<header className='header-type1'>
				<form onSubmit={onCreateToDo} className='flex flex-row gap-2'>
					<input
						autoComplete='off'
						type='text'
						name='title'
						placeholder='Название для задачи...'
					/>
					<button type='submit' className='button-type1'>
						Создать
					</button>
				</form>
			</header>
			<ul className='py-3 flex flex-col gap-1'>
				{todo?.map((item) => (
					<li key={item.id} className='box-type1'>
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
					</li>
				))}
			</ul>
		</div>
	)
}
