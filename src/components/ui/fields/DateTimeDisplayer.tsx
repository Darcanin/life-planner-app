const minuteInSeconds = 1000 * 60
const hourInSeconds = minuteInSeconds * 60
const dayInSeconds = hourInSeconds * 24

interface IPDateTimeDisplayer {
	date: number
	overdue?: {
		text: string
		textColor: string
	}
}

export const DateTimeDisplayer = ({
	date,
	overdue = { text: '', textColor: '' },
}: IPDateTimeDisplayer) => {
	const inpDate = Math.abs(date)
	const days = Math.floor(inpDate / dayInSeconds)
	const hours = Math.floor((inpDate % dayInSeconds) / hourInSeconds)
	const minutes = Math.floor((inpDate % hourInSeconds) / minuteInSeconds)

	return (
		<div
			className={
				'date_time_displayer flex flex-row items-center gap-1' +
				(date > 0 ? '' : ' overdue')
			}
		>
			{date < 0 && overdue && (
				<span style={{ color: overdue.textColor }}>{overdue.text}</span>
			)}
			<input
				className='text-white'
				type='text'
				disabled
				value={String(days).padStart(2, '0')}
			/>
			<input
				className='text-white'
				type='text'
				disabled
				value={
					String(hours).padStart(2, '0') +
					' : ' +
					String(minutes).padStart(2, '0')
				}
			/>{' '}
		</div>
	)
}
