import { Link } from 'react-router-dom'

/**
 * AppHeader - это компонент шапки приложения.
 * Содержит ссылки на разделы приложения.
 *
 * @returns возвращает JSX разметку шапки приложения.
 */

export const AppHeader = () => {
	return (
		<>
			<nav className='max-sm:hidden my-2 header flex flex-row gap-1 text-white [&>*]:px-2 [&>*]:py-1 [&>*]:bg-dark-grey [&>*]:rounded'>
				<Link to='/'>Home</Link>
				<Link to='/dev'>Components</Link>
				<Link to='/about'>About</Link>
				<Link to='/daily'>Daily-tasks</Link>
			</nav>
			<div className='max-sm:block hidden'> Popup! </div>
		</>
	)
}
