import { useEffect, useState } from 'react'

const Home = () => {
	const [posts, setPosts] = useState([])

	const fetchData = async () => {
		const response = await fetch('https://jsonplaceholder.typicode.com/posts')
		const data = await response.json()
		setPosts(data)
		console.log(data)
	}

	useEffect(() => {
		fetchData()
	}, [])

	return (
		<>
			<ul className='p-4 flex flex-col gap-1'>
				{posts?.map((post: any) => (
					<li
						key={post.id}
						className='px-3 py-2 rounded bg-grey hover:bg-secondary/30'
					>
						{post.title}
					</li>
				))}
			</ul>
		</>
	)
}

export default Home
