import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './AppRoutes'
import { AppHeader } from './components/layout/AppHeader'
import { AppContent } from './components/layout/AppContent'
import { ContentWrapper } from './components/layout/ContentWrapper'
import { ModalWindow } from './components/windows/ModalWindow'

export function App() {
	return (
		<BrowserRouter>
			<AppContent>
				<AppHeader />
				<ContentWrapper>
					<AppRoutes />
				</ContentWrapper>
				<ModalWindow />
			</AppContent>
		</BrowserRouter>
	)
}
