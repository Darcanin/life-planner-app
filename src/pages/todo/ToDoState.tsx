import Database from '@tauri-apps/plugin-sql'
import { create } from 'zustand'
import { IToDoTask } from './types'
import { playSound } from '../../helpers/playSound'
import { SoundsConfig } from '../../config/SoundsConfig'

interface IToDoState {
	db: Database | null
	todos: IToDoTask[]

	// CRUD operations
	create: (title: string) => void
	update: (todo: IToDoTask) => void
	delete: (id: number) => void
	get: (id: number) => IToDoTask | undefined
	completed: (id: number) => void

	// Load data
	loadDataBase: () => void
	loadData: () => void
}

export const ToDoState = create<IToDoState>((set, get) => ({
	db: null,
	todos: [],

	// CRID operations
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
	update: (todo) => {
		get().db?.execute(
			`UPDATE TodoTasks 
					SET title = $1, edited_date = $2 
					WHERE id = $3`,
			[todo.title, new Date().toISOString(), todo.id]
		)
		get().loadData()
	},
	delete: (id) => {
		playSound(SoundsConfig.task_deleted)
		get().db?.execute(`DELETE FROM TodoTasks WHERE id = $1`, [id])
		get().loadData()
	},
	get: (id) => {
		return get().todos.find((todo) => todo.id === id)
	},
	completed: (id) => {
		const isCompleted = get().todos.find(
			(todo) => todo.id === id
		)?.closed_date
		isCompleted
			? playSound(SoundsConfig.task_uncompleted)
			: playSound(SoundsConfig.task_completed)
		const date = isCompleted ? null : new Date().toISOString()

		get().db?.execute(
			`
			UPDATE TodoTasks 
				SET closed_date = $1 
				WHERE id = $2`,
			[date, id]
		)
		get().loadData()
	},

	// Load data
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
