import { ReactNode } from 'react'

/**
 * AppContent - это компонент-обертка для основного контента приложения.
 *
 * @param {ReactNode} props.children - дочерние элементы.
 */
export const AppContent = ({ children }: { children: ReactNode }) => {
	return <main className='bg-bg h-full w-full flex flex-col'>{children}</main>
}
