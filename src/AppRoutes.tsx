import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/home/HomePage'
import { DailyPage } from './pages/daily/DailyPage'
import { ToDoPage } from './pages/todo/ToDoPage'
import { SettingsPage } from './pages/settings/SettingsPage'

/**
 * AppRoutes - компонент, содержащий маршруты приложения.
 *
 * @returns Возвращает JSX разметку в зависимости от текущего маршрута.
 */

export const AppRoutes = () => {
	return (
		<Routes>
			<Route index element={<HomePage />} />
			<Route path='daily' element={<DailyPage />} />
			<Route path='todo' element={<ToDoPage />} />
			<Route path='settings' element={<SettingsPage />} />

			{/* <Route path='dev'>
				<Route index element={<Components />} />
			</Route> */}
		</Routes>
	)
}
