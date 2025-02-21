import { SettingsConfig } from '../config/SettingsConfig'

/**
 * playSound - функция для вызова звуков.
 *
 * * `path` - путь до аудио-файла.
 * * `soundReduction?` - коэффициент понижения звука [0...1].
 */

export const playSound = (path: string, soundReduction?: number) => {
	const sound = new Audio(path)
	const volume = SettingsConfig.SoundVolume
	sound.volume = soundReduction
		? (volume / 100) * soundReduction
		: volume / 100

	sound.play()
}
