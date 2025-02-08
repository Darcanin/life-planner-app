const Home = () => {
	return (
		<div className='mt-5 flex flex-row gap-4 items-center justify-center'>
			<span className='text-2xl'>Цветовая схема: </span>
			<div className='h-10 flex flex-row flex-wrap border rounded-sm overflow-hidden'>
				<div className='w-8 h-full bg-primary'></div>
				<div className='w-8 h-full bg-secondary'></div>
				<div className='w-8 h-full bg-background'></div>
				<div className='w-8 h-full bg-surface'></div>
				<div className='w-8 h-full bg-highlight'></div>
				<div className='w-8 h-full bg-soft-highlight'></div>
				<div className='w-8 h-full bg-text'></div>
				<div className='w-8 h-full bg-border'></div>
			</div>

			<div className='w-10 h-40 bg-amber-300 flex flex-col'>
				<div className='w-full h-15 bg-blue-500 shrink-0'></div>
				<div className='w-full grow bg-cyan-400 overflow-auto'>
					<div className='h-50 bg-amber-800'></div>
				</div>
			</div>
		</div>
	)
}

export default Home
