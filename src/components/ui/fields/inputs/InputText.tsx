interface IInputTextProps {
	name: string
	label: string
	register: any
	error?: string
}

/**
 * Компонент InputText.
 * >
 * @param {string} name - уникальное имя поля ввода.
 * @param {string} label - название поля.
 * @param {any} register - функция регистрации поля (React-Hook-Form).
 * @param {string} error - сообщение об ошибке (необязательный параметр).
 * @param {any} rest - дополнительные свойства для поля ввода.
 * >
 * >
 * @example
 * <InputText
 *    label='Название задачи'
 *    name='title'
 *    register={register}
 * />
 */

export const InputText = ({
	name,
	label,
	register,
	error,
	...rest
}: IInputTextProps) => {
	return (
		<div className='field'>
			<label htmlFor={name}>{label}</label>
			<input
				type='text'
				name={name}
				{...register(name)}
				autoComplete='off'
				{...rest}
			/>
			{error && <div className='error'>{error}</div>}
		</div>
	)
}
