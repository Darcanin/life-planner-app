import { BrowserRouter } from 'react-router-dom'
import Header from './components/layout/Header'
import Content from './components/layout/Content'
import AppRoutes from './components/layout/AppRoutes'
import './App.css'

function App() {
	return (
		<BrowserRouter>
			<main className='bg-background h-full w-full flex flex-col'>
				<Header />
				<Content>
					<AppRoutes />
				</Content>
			</main>
		</BrowserRouter>
	)
}

export default App
