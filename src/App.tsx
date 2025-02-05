import './App.css'

function App() {
	return (
		<main className='text-3xl font-bold underline pt-20 text-center bg-background h-full w-full'>
			<h1>Life planner app</h1>
			<input
				className='border rounded mt-10 px-5 bg-primary'
				type='text'
				name=''
				id=''
			/>
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
		</main>
	)
}

export default App
