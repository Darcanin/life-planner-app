import DailyTask from './DailyTask'
import dailyState from './State'

const DailyTaskList = () => {
	const dailyList = dailyState((state) => state.daily)
	const search = dailyState((state) => state.search)

	return (
		<div
			className='p-4 flex flex-col gap-2 bg-zinc-600/15 px-3 rounded grow-1 overflow-x-auto'
			style={{
				scrollbarWidth: 'thin',
				scrollMarginBlockStart: '0px',
				scrollPaddingBlockStart: '0px',
			}}
			// scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-500 scrollbar-hide
		>
			{dailyList.map((daily) => {
				if (
					daily.title
						.toLocaleLowerCase()
						.includes(search.toLocaleLowerCase())
				) {
					return <DailyTask key={daily.id} daily={daily} />
				}
			})}
		</div>
	)
}

export default DailyTaskList
