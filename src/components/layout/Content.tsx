import { ReactNode } from 'react'

const Content = ({ children }: { children: ReactNode }) => {
	return <div className='content grow-1 flex'>{children}</div>
}

export default Content
