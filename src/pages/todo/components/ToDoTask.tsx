import { IToDoTask } from '../types'

interface IToDoTaskProps {
	item: IToDoTask
	options?: { text: string; fn: (id: number) => void }[]
}

export const ToDoTask = ({ item, options }: IToDoTaskProps) => {
	const dateTimeConvertor = (dateStr: string) => {
		const date = new Date(dateStr + 'Z')
		const localDateFormatted =
			date.toLocaleDateString() + ' ' + date.toLocaleTimeString().slice(0, 5)
		return localDateFormatted
	}

	return (
		<div className='box-type1'>
			<div className='info'>
				<h3>{item.title}</h3>
				<div className=''>
					<span>{dateTimeConvertor(item.created_date)}</span>
					{item.finish_date ? (
						<>
							<span>➡️</span>
							<span>{dateTimeConvertor(item.finish_date)}</span>
						</>
					) : (
						''
					)}
				</div>
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
