import { ReactNode } from 'react'

const Content = ({ children }: { children: ReactNode }) => {
	return (
		<div className='content grow-1 flex flex-col w-full overflow-hidden'>
			{children}
		</div>
	)
}

export default Content
