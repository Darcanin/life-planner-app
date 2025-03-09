import { useEffect, useState } from 'react'
import { ToDoState } from './ToDoState'
import { ToDoList } from './components/ToDoList'
import { ToDoListHistory } from './components/ToDoListHistory'

export const ToDoPage = () => {
	const [display, setDisplay] = useState<'list' | 'history'>('list')
	const todos = ToDoState((state) => state.todos)
	const createToDo = ToDoState((state) => state.create)
	const loadDataBase = ToDoState((state) => state.loadDataBase)

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
		<>
			<header className='header-type1 flex justify-between'>
				<form onSubmit={onCreateToDo} className='flex flex-row gap-2'>
					<input
						autoComplete='off'
						type='text'
						name='title'
						placeholder='Название для задачи...'
						required
					/>
					<button type='submit' className='button-type1'>
						Создать
					</button>
				</form>
				<button
					type='button'
					onClick={() =>
						setDisplay(display === 'list' ? 'history' : 'list')
					}
					className={
						'h-full button-type1' +
						(display === 'history' ? ' bg-amber-300/90!' : '')
					}
				>
					🏁
				</button>
			</header>
			<div className='grow-1 overflow-auto p-2 m-2'>
				{display === 'list' ? <ToDoList todos={todos} /> : null}
				{display === 'history' ? <ToDoListHistory todos={todos} /> : null}
			</div>
		</>
	)
}
