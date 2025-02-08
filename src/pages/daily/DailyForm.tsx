import { useForm } from 'react-hook-form'
import { IDaily } from './Types'
import dailyState, { currentDaily } from './State'
import { useEffect } from 'react'

const DailyForm = () => {
	const id = currentDaily((state) => state.id)
	const setCurrentId = currentDaily((state) => state.setCurrentId)

	const update = dailyState((state) => state.update)
	const getDailyById = dailyState((state) => state.getDailyById)
	const { register, handleSubmit, reset } = useForm<IDaily>()

	// Установка изначальных значений
	useEffect(() => {
		if (id) reset(getDailyById(id))
	}, [id])

	// Сохранение данных
	const onFormSubmit = (data: IDaily) => {
		console.log(data)
		update(data)
		close()
	}

	// Закрытие формы
	const close = () => {
		setCurrentId(null)
	}

	if (!id) return
	else
		return (
			<form
				onSubmit={handleSubmit(onFormSubmit)}
				className='w-100 bg-zinc-800/10 rounded p-2 flex flex-col gap-2 [&>input]:p-1 [&>input]:border [&>input]:border-gray-500 [&>input]:rounded [&>input]:bg-white/60'
			>
				<input
					type='text'
					{...register('title')}
					placeholder='title'
					autoComplete='off'
				/>
				<input
					type='text'
					{...register('description')}
					placeholder='description'
					autoComplete='off'
				/>
				<input
					type='text'
					{...register('createdDate')}
					placeholder='createdDate'
					autoComplete='off'
					readOnly
				/>
				<input
					type='text'
					{...register('closedDate')}
					placeholder='closedDate'
					autoComplete='off'
				/>
				<div className='flex flex-row gap-4 [&>button]:px-3 [&>button]:py-1 [&>button]:bg-zinc-800/15'>
					<button type='submit'>Сохранить</button>
					<button type='button' onClick={close}>
						Закрыть
					</button>
				</div>
			</form>
		)
}

export default DailyForm
