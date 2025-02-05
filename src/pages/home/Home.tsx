const Home = () => {
	return (
		<div className='px-5'>
			<div className='mt-5 w-full flex flex-row flex-wrap border rounded-xl overflow-hidden'>
				<div className='w-full h-8 bg-primary'></div>
				<div className='w-full h-8 bg-secondary'></div>
				<div className='w-full h-8 bg-background'></div>
				<div className='w-full h-8 bg-surface'></div>
				<div className='w-full h-8 bg-highlight'></div>
				<div className='w-full h-8 bg-soft-highlight'></div>
				<div className='w-full h-8 bg-text'></div>
				<div className='w-full h-8 bg-border'></div>
			</div>
		</div>
	)
}

export default Home
