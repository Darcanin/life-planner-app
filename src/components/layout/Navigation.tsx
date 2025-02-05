import { Link } from 'react-router-dom'

const Navigation = () => {
	return (
		<nav>
			<ul className='flex space-x-4 underline text-xl font-bold'>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/daily'>Daily</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Navigation
