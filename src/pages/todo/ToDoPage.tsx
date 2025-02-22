import { useEffect } from 'react'
import { ToDoState } from './ToDoState'
import { ToDoList } from './components/ToDoList'

export const ToDoPage = () => {
	const createToDo = ToDoState((state) => state.create)
	const loadDataBase = ToDoState((state) => state.loadDataBase)

	const todos = ToDoState((state) => state.todos)

	useEffect(() => {
		loadDataBase()
	}, [])

	const onCreateToDo = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const formData = new FormData(e.currentTarget)
		const title = formData.get('title') as string

		createToDo(title)
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
			<ToDoList todos={todos} />
		</div>
	)
}
