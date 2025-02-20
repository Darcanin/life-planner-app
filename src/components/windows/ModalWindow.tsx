import { createPortal } from 'react-dom'
import { ModalWindowState } from './ModalWindowState'
import style from './style.module.sass'
import { playSound } from '../../helpers/playSound'
import { SoundsConfig } from '../../config/SoundsConfig'

export const ModalWindow = () => {
	const isOpen = ModalWindowState((state) => state.isOpen)
	const close = ModalWindowState((state) => state.close)
	const content = ModalWindowState((state) => state.content)

	const onModalClose = () => {
		playSound(SoundsConfig.minecraft_close_chest)
		close()
	}

	if (!isOpen) return null
	return createPortal(
		<div className={style.modal}>
			<div className={style.modal_content}>
				<header className='modal-header'>
					<button onClick={onModalClose}>✖️</button>
				</header>
				<div className='modal-body'>{content}</div>
			</div>
		</div>,
		document.body
	)
}
