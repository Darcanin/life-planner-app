import Database from '@tauri-apps/plugin-sql'

interface IDataBase {
	path: string
	db: Database
}

export const DataBase: IDataBase = {
	path: 'sqlite:life-planner.db',
	db: await Database.load('sqlite:life-planner.db'),
}
