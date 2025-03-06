interface ILineCardProps {
	title: string
	options?: { text: string; callBack: () => void }[]
}

export const LineCard = ({ title, options }: ILineCardProps) => {
	return (
		<div className='box-type1'>
			<div className='info'>
				<h3>{title}</h3>
				<div className=''>
					{/* <span>{dateTimeConvertor(item.created_date)}</span>
					{item.finish_date ? (
						<>
							<span>➡️</span>
							<span>{dateTimeConvertor(item.finish_date)}</span>
						</>
					) : (
						''
					)} */}
				</div>
			</div>
			<div className='options'>
				{options?.map((option) => (
					<button
						key={option.text}
						type='button'
						onClick={() => option.callBack()}
					>
						{option.text}
					</button>
				))}
			</div>
		</div>
	)
}
