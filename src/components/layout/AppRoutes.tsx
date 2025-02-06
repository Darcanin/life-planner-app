import { Routes, Route } from 'react-router-dom'

import Home from './../../pages/home/Home'
import Daily from './../../pages/daily/Daily'

const AppRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/daily' element={<Daily />} />
		</Routes>
	)
}

export default AppRoutes
