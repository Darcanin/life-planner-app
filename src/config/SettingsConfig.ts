import { DataBase } from './DataBase'

interface IDBSettings {
	key: string
	value: string
}

// Значения по умолчанию
const defaultSettings = {
	SoundVolume: 10,
}
// Пользовательские значения
export const SettingsConfig = {
	SoundVolume: 10,
}

const initSettings = async () => {
	const res: IDBSettings[] = await DataBase.db.select(
		'SELECT key, value FROM Settings'
	)
	// console.log(res)
	if (res.length === 0) {
		DataBase.db.execute(
			`INSERT INTO Settings (value) 
				VALUES ($1)
				WHERE key = 'SoundVolume'`,
			[defaultSettings.SoundVolume]
		)
	} else {
		SettingsConfig.SoundVolume = Number(res[0].value)
	}
}
initSettings()

export const saveConfig = () => {
	DataBase.db.execute(
		`UPDATE Settings
			SET value = $1 
			WHERE key = $2`,
		[SettingsConfig.SoundVolume, 'SoundVolume']
	)
}
