import './App.css'
import Content from './components/layout/Content'
import Header from './components/layout/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Daily from './pages/daily/Daily'

function App() {
	return (
		<BrowserRouter>
			<main className='bg-background h-full w-full'>
				<Header />
				<Content>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/daily' element={<Daily />} />
					</Routes>
				</Content>
			</main>
		</BrowserRouter>
	)
}

export default App
