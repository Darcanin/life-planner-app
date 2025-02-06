import dailyState from './State'
import { IDaily } from './Types'

const DailyTask = ({ daily }: { daily: IDaily }) => {
	const complete = dailyState((state) => state.completeChange)

	return (
		<div className='border border-gray-500 p-2 rounded'>
			<button
				type='button'
				onClick={() => {
					complete(daily.id)
				}}
			>
				{daily.closedDate ? '✅' : '⭕'}
			</button>
			<span>{daily.title}</span>
		</div>
	)
}

export default DailyTask
