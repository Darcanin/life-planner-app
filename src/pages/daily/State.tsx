import { create } from 'zustand'
import { IDaily } from './Types'

interface IDailyState {
	daily: IDaily[]
	search: string
	setSearch: (str: string) => void
	create: (newDaily: IDaily) => void
	update: (updatedDaily: IDaily) => void
	delete: (id: number) => void
	getDailyById: (id: number) => IDaily | undefined
	completeChange: (id: number) => void
}

const dailyState = create<IDailyState>((set, get) => ({
	daily: [],
	search: '',

	// Поиск
	setSearch: (str) => set({ search: str }),

	// Задачи - CRID
	create: (newDaily) =>
		set((state) => ({
			daily: [...state.daily, newDaily],
		})),
	update: (updatedDaily) =>
		set((state) => ({
			daily: state.daily.map((daily) =>
				daily.id !== updatedDaily.id ? daily : updatedDaily
			),
		})),
	delete: (id) =>
		set((state) => ({
			daily: state.daily.filter((daily) => daily.id !== id),
		})),

	// Задачи - дополнительные методы
	getDailyById: (id) => {
		return get().daily.find((daily) => daily.id === id)
	},
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

//
interface ICurrentDaily {
	id: number | null
	setCurrentId: (id: number | null) => void
}

//
export const currentDaily = create<ICurrentDaily>((set) => ({
	id: null,
	setCurrentId: (id) => set({ id: id }),
}))
