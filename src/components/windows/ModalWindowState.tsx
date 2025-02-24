import { create } from 'zustand'
import { playSound } from '../../helpers/playSound'
import { SoundsConfig } from '../../config/SoundsConfig'

interface IModalWindowState {
	content: React.ReactNode | null
	isOpen: boolean
	open: (content: React.ReactNode) => void
	close: () => void
}

export const ModalWindowState = create<IModalWindowState>((set) => ({
	content: null,
	isOpen: false,
	open: (content) => {
		playSound(SoundsConfig.task_open_form)
		set({ isOpen: true, content: content })
	},
	close: () => {
		playSound(SoundsConfig.task_close_form)
		set({ isOpen: false, content: null })
	},
}))
