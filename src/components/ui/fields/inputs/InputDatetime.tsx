//
interface IInputDatetimeProps {
	name: string
	label: string
	register: any
	error?: string
}

/**
 * Компонент InputDatetime.
 * >
 * @param {string} name - уникальное имя поля ввода.
 * @param {string} label - название поля.
 * @param {any} register - функция регистрации поля (React-Hook-Form).
 * @param {string} error - сообщение об ошибке (необязательный параметр).
 * @param {any} rest - дополнительные свойства для поля ввода.
 * >
 * >
 * @example
 * <InputDatetime
 *    name='finish_date'
 *    label='Смертельная линия!'
 *    register={register}
 * />
 *
 */

export const InputDatetime = ({
	name,
	label,
	register,
	error,
	...rest
}: IInputDatetimeProps) => {
	return (
		<div className='field'>
			<label htmlFor={name}>{label}</label>
			<input
				name={name}
				type='datetime-local'
				{...register(name)}
				className='w-full'
				autoComplete='off'
				title='Выберите дату и время'
				{...rest}
			/>
			{error && <div className='error'>{error}</div>}
		</div>
	)
}
