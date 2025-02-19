import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/home/Home'
import { Components } from './pages/components/Components'
import { Daily } from './pages/daily/Daily'
import { ToDo } from './pages/todo/ToDo'

/**
 * AppRoutes - компонент, содержащий маршруты приложения.
 *
 * @returns Возвращает JSX разметку в зависимости от текущего маршрута.
 */

export const AppRoutes = () => {
	return (
		<Routes>
			<Route index element={<Home />} />
			<Route path='daily' element={<Daily />} />
			<Route path='todo' element={<ToDo />} />

			<Route path='dev'>
				<Route index element={<Components />} />
			</Route>
		</Routes>
	)
}
