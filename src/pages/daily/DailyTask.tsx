import dailyState from './State'
import { IDaily } from './Types'
import { IoClose } from 'react-icons/io5'

const DailyTask = ({ daily }: { daily: IDaily }) => {
	const complete = dailyState((state) => state.completeChange)
	const del = dailyState((state) => state.delete)

	return (
		<div className='border border-gray-500 p-2 rounded flex flex-row justify-between items-center'>
			<div className=''>
				<button
					type='button'
					onClick={() => {
						complete(daily.id)
					}}
				>
					{daily.closedDate ? '✅' : '⭕'}
				</button>
				<span className='ml-2'>{daily.title}</span>
			</div>
			<div className='h-6'>
				<button
					onClick={() => {
						del(daily.id)
					}}
				>
					<IoClose size={24} />
				</button>
			</div>
		</div>
	)
}

export default DailyTask
