import { IToDoTask } from '../types'

interface IToDoTaskProps {
	item: IToDoTask
	options?: { text: string; fn: (id: number) => void }[]
}

export const ToDoTask = ({ item, options }: IToDoTaskProps) => {
	return (
		<div key={item.id} className='box-type1'>
			<span>{item.title}</span>
			<div className='box-type1-options'>
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
