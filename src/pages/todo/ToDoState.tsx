import Database from '@tauri-apps/plugin-sql'
import { create } from 'zustand'
import { ToDoTask } from './types'

interface IToDoState {
	db: Database | null
	todos: ToDoTask[]
	create: (title: string) => void
	delete: (id: number) => void
	loadDataBase: () => void
	loadData: () => void
}

export const ToDoState = create<IToDoState>((set, get) => ({
	db: null,
	todos: [],
	create: (title) => {
		const currentDate = new Date().toISOString()
		get().db?.execute(
			`INSERT INTO TodoTasks 
               (title, created_date, edited_date) 
               VALUES 
               ($1, $2, $3)`,
			[title, currentDate, currentDate]
		)
		get().loadData()
	},

	delete: (id) => {
		get().db?.execute(`DELETE FROM TodoTasks WHERE id = $1`, [id])
		get().loadData()
	},
	loadDataBase: async () => {
		set({ db: await Database.load('sqlite:life-planner.db') })
		get().loadData()
	},
	loadData: async () => {
		setTimeout(() => {
			get()
				.db?.select('SELECT * FROM TodoTasks')
				.then((res: any) => {
					set({ todos: res })
					console.log(res)
				})
				.catch((err) => {
					console.log(err)
				})
		}, 10)
	},
}))
