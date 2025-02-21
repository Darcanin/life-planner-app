import { createPortal } from 'react-dom'
import { ModalWindowState } from './ModalWindowState'
import style from './style.module.sass'

export const ModalWindow = () => {
	const isOpen = ModalWindowState((state) => state.isOpen)
	const close = ModalWindowState((state) => state.close)
	const content = ModalWindowState((state) => state.content)

	if (!isOpen) return null
	return createPortal(
		<div className={style.modal} onClick={close}>
			<div
				className={style.modal_content}
				onClick={(e) => e.stopPropagation()}
			>
				<header className={style.modal_header}>
					<button onClick={close}>✖️</button>
				</header>
				<div className={style.modal_body}>{content}</div>
			</div>
		</div>,
		document.body
	)
}
