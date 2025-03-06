interface IInputTextProps {
	name: string
	label: string
	register: any
	error?: string
}

/**
 * Компонент Textarea.
 * >
 * @param {string} name - уникальное имя поля ввода.
 * @param {string} label - название поля.
 * @param {any} register - функция регистрации поля (React-Hook-Form).
 * @param {string} error - сообщение об ошибке (необязательный параметр).
 * @param {any} rest - дополнительные свойства для поля ввода.
 * >
 * >
 * @example
 * <Textarea
 *    name='description'
 *    label='Описание задачи'
 *    register={register}
 * />
 */
export const Textarea = ({
	name,
	label,
	register,
	error,
	...rest
}: IInputTextProps) => {
	return (
		<div className='field'>
			<label htmlFor={name}>{label}</label>
			<textarea
				name={name}
				{...register(name)}
				className='w-full'
				autoComplete='off'
				rows={3}
				{...rest}
			/>
			{error && <div className='error'>{error}</div>}
		</div>
	)
}
