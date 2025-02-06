import { create } from 'zustand'
import { IDaily } from './Types'

interface IDailyState {
	daily: IDaily[]
	search: string
	create: (newDaily: IDaily) => void
	get: () => void
	completeChange: (id: number) => void
}

const dailyState = create<IDailyState>((set) => ({
	daily: [],
	search: '',

	//
	create: (newDaily) =>
		set((state) => ({
			daily: [...state.daily, newDaily],
		})),
	// update: () => {},
	// delete: () => {},
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
