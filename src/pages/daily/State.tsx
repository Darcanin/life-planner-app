import { create } from 'zustand'
import { IDaily } from './Types'

interface IDailyState {
	daily: IDaily[]
	search: string
	setSearch: (str: string) => void
	create: (newDaily: IDaily) => void
	delete: (id: number) => void
	get: () => void
	completeChange: (id: number) => void
}

const dailyState = create<IDailyState>((set) => ({
	daily: [],
	search: '',

	//
	setSearch: (str) => set({ search: str }),
	//
	create: (newDaily) =>
		set((state) => ({
			daily: [...state.daily, newDaily],
		})),
	// update: (id) => set(() => ({})),
	delete: (id) =>
		set((state) => ({
			daily: state.daily.filter((daily) => daily.id !== id),
		})),
	get: () => {},
	completeChange: (id) =>
		set((state) => ({
			daily: state.daily.map((daily) =>
				daily.id === id
					? {
							...daily,
							closedDate: daily.closedDate
								? null
								: new Date().toISOString(),
					  }
					: daily
			),
		})),
}))

export default dailyState
