import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './AppRoutes'
import { AppHeader } from './components/layout/AppHeader'
import { AppContent } from './components/layout/AppContent'
import { ContentWrapper } from './components/layout/ContentWrapper'

export function App() {
	return (
		<BrowserRouter>
			<AppContent>
				<AppHeader />
				<ContentWrapper>
					<AppRoutes />
				</ContentWrapper>
			</AppContent>
		</BrowserRouter>
	)
}
