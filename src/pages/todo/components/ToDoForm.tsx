import { ModalWindowState } from '../../../components/windows/ModalWindowState'
import { useForm } from 'react-hook-form'
import { ToDoState } from '../ToDoState'
import { useEffect } from 'react'
import { IToDoTask } from '../types'
import { InputText } from '../../../components/ui/fields/inputs/InputText'
import { Textarea } from '../../../components/ui/fields/Textarea'
import { InputDatetime } from '../../../components/ui/fields/inputs/InputDatetime'

export const ToDoForm = ({ id }: { id: number }) => {
	const getTodo = ToDoState((state) => state.get)
	const updateTodo = ToDoState((state) => state.update)
	const closeModal = ModalWindowState((state) => state.close)
	const { register, handleSubmit, reset } = useForm<IToDoTask>()

	// Получение данных
	useEffect(() => {
		const data = getTodo(id)
		reset(data)
	}, [])

	// Обновление данных
	const onTodoUpdate = (data: IToDoTask) => {
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
			<InputText label='Название задачи' name='title' register={register} />

			<Textarea
				label='Описание задачи'
				name='description'
				register={register}
			/>
			<InputDatetime
				label='Смертельная линия!'
				name='finish_date'
				register={register}
			/>

			<button type='submit' className='button-type1 mt-6'>
				Сохранить изменения
			</button>
		</form>
	)
}
