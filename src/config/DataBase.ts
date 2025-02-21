import Database from '@tauri-apps/plugin-sql'

interface IDataBase {
	path: string
	db: Database | null
}

export const DataBase: IDataBase = {
	path: 'sqlite:life-planner.db',
	db: null,
}

const initDataBase = async () => {
	DataBase.db = await Database.load(DataBase.path)
}
initDataBase()
