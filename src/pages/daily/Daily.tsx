export const Daily = () => {
	return (
		<>
			<div className='p-4'>
				<header className='px-3 py-2 flex flex-row gap-3 border border-gray-600 rounded'>
					<div className='filters'>
						<input type='search' />
						<input type='checkbox' />
					</div>
				</header>
				<ul className='p-4 flex flex-col gap-1'>
					<li className='custom-container-type1'>Task 1</li>
					<li className='custom-container-type1'>Task 2</li>
					<li className='custom-container-type1'>Task 3</li>
					<li className='custom-container-type1'>Task 4</li>
				</ul>
			</div>
		</>
	)
}
