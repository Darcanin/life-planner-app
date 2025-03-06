import { Link, useLocation } from 'react-router-dom'

/**
 * AppHeader - это компонент шапки приложения.
 * Содержит ссылки на разделы приложения.
 *
 * @returns возвращает JSX разметку шапки приложения.
 */

export const AppHeader = () => {
	const location = useLocation()

	return (
		<>
			<nav className='header-main'>
				<Link to='/' className={location.pathname === '/' ? 'active' : ''}>
					Home
				</Link>
				<Link
					to='/todo'
					className={location.pathname === '/todo' ? 'active' : ''}
				>
					ToDo tasks
				</Link>
				<Link
					to='/daily'
					className={location.pathname === '/daily' ? 'active' : ''}
				>
					Daily tasks
				</Link>
				<Link
					to='/settings'
					className={location.pathname === '/settings' ? 'active' : ''}
				>
					Settings
				</Link>
			</nav>
			<div className='max-sm:block hidden'> Popup! </div>
		</>
	)
}
