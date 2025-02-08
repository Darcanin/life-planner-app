import DailyTaskList from './DailyTaskList'
import DailyHeader from './DailyHeader'
import DailyForm from './DailyForm'

const Daily = () => {
	return (
		<div className='flex flex-col gap-4 p-4 grow h-full w-full'>
			<DailyHeader />
			<DailyTaskList />
			<div className=''>
				<DailyForm />
			</div>
		</div>
	)
}

export default Daily
