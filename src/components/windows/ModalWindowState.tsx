import { create } from 'zustand'

interface IModalWindowState {
	content: React.ReactNode | null
	isOpen: boolean
	open: (content: React.ReactNode) => void
	close: () => void
}

export const ModalWindowState = create<IModalWindowState>((set) => ({
	content: null,
	isOpen: false,
	open: (content) => set({ isOpen: true, content: content }),
	close: () => set({ isOpen: false, content: null }),
}))
