import { ReactNode } from 'react'

export const Section = ({
	className,
	children,
}: {
	className?: string
	children: ReactNode
}) => {
	return (
		<section
			className={
				'rounded m-2 p-2 bg-grey/10 border border-indigo-50/30 flex flex-col overflow-hidden ' +
				className
			}
		>
			{children}
		</section>
	)
}
