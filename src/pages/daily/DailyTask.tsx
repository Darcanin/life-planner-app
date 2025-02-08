import dailyState, { currentDaily } from './State'
import { IDaily } from './Types'
import { IoClose } from 'react-icons/io5'
import { CiEdit } from 'react-icons/ci'

const DailyTask = ({ daily }: { daily: IDaily }) => {
	const complete = dailyState((state) => state.completeChange)
	const del = dailyState((state) => state.delete)

	const setCurrentId = currentDaily((state) => state.setCurrentId)

	return (
		<div className='border border-gray-500 p-2 rounded flex flex-row justify-between items-center'>
			<div className='flex flex-row gap-2'>
				<button
					type='button'
					onClick={() => {
						complete(daily.id)
					}}
				>
					{daily.closedDate ? '✅' : '⭕'}
				</button>
				<span className=''>{daily.title}</span>
				<span className='px-1 pt-1 bg-zinc-800/10 rounded text-xs'>
					{new Date(daily.createdDate)
						.toLocaleTimeString()
						.slice(0, -3)}
				</span>
				<span className='px-1 pt-1 bg-zinc-800/10 rounded text-xs'>
					{new Date(daily.createdDate).toLocaleDateString()}
				</span>
			</div>
			<div className='h-6'>
				<button onClick={() => setCurrentId(daily.id)}>
					<CiEdit size={24} />
				</button>
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
