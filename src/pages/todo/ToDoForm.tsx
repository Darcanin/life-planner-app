import { useForm } from 'react-hook-form'
import { ToDoState } from './ToDoState'
import { useEffect } from 'react'
import { ToDoTask } from './types'
import { ModalWindowState } from '../../components/windows/ModalWindowState'

export const ToDoForm = ({ id }: { id: number }) => {
	const getDodo = ToDoState((state) => state.get)
	const updateTodo = ToDoState((state) => state.update)
	const closeModal = ModalWindowState((state) => state.close)
	const { register, handleSubmit, reset } = useForm<ToDoTask>()

	// Получение данных
	useEffect(() => {
		const data = getDodo(id)
		reset(data)
	}, [])

	// Обновление данных
	const onTodoUpdate = (data: ToDoTask) => {
		console.log(data)
		updateTodo(data)
		closeModal()
	}

	return (
		<form
			onSubmit={handleSubmit(onTodoUpdate)}
			className='flex flex-col gap-2 p-4 grow-1'
		>
			<span className='mt-[-36px] text-xl text-amber-300 py-2'>
				<b>{'> '}</b>Редактирование задачи №{id}
			</span>
			<div className='flex flex-col gap-0.5'>
				<label
					className='italic text-white/70 text-xs uppercase'
					htmlFor='title'
				>
					Название задачи
				</label>
				<input
					type='text'
					{...register('title')}
					className='w-full'
					autoComplete='off'
				/>
			</div>
			<button type='submit' className='button-type1 mt-6'>
				Сохранить изменения
			</button>
		</form>
	)
}
