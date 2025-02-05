import { ReactNode } from 'react'

const Content = ({ children }: { children: ReactNode }) => {
	return <div className='content'>{children}</div>
}

export default Content
