import { IToDoTask } from '../types'

interface IToDoTaskProps {
	item: IToDoTask
	options?: { text: string; fn: (id: number) => void }[]
}

export const ToDoTask = ({ item, options }: IToDoTaskProps) => {
	const date = new Date(item.created_date + 'Z')
	const localDateFormatted =
		date.toLocaleDateString() + ' ' + date.toLocaleTimeString().slice(0, 5)

	return (
		<div key={item.id} className='box-type1'>
			<div className='info'>
				<h3>{item.title}</h3>
				<span>{localDateFormatted}</span>
			</div>
			<div className='options'>
				{options?.map((option) => (
					<button
						key={option.text}
						type='button'
						onClick={() => option.fn(item.id)}
					>
						{option.text}
					</button>
				))}
			</div>
		</div>
	)
}
