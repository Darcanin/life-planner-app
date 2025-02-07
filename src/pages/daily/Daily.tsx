import DailyTaskList from './DailyTaskList'
import DailyHeader from './DailyHeader'

const Daily = () => {
	return (
		<div className='flex flex-col gap-4 p-4 grow-1'>
			<DailyHeader />
			<DailyTaskList />
		</div>
	)
}

export default Daily
