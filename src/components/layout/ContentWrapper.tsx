import { ReactNode } from 'react'

/**
 * ContentWrapper - это компонент-обертка для контента страницы.
 */

export const ContentWrapper = ({ children }: { children: ReactNode }) => {
	return <div className='p-3 overflow-auto'>{children}</div>
}
