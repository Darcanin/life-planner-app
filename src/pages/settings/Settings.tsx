import { useState } from 'react'
import { InputRange } from '../../components/ui/inputs/InputRange'
import { SettingsConfig } from '../../config/SettingsConfig'

export const Settings = () => {
	const [volume, setVolume] = useState(SettingsConfig.volume)

	return (
		<>
			<span className='text-2xl'>Настройки</span>
			<div className='p-3 flex flex-col gap-1'>
				<div className='flex flex-row gap-2 text-lg font-bold'>
					<span className='pl-0.25 '>Уровень громкости звуков:</span>
					<span className='text-yellow-400'>{volume}%</span>
				</div>
				<InputRange
					min={0}
					max={100}
					step={5}
					value={volume}
					setValue={(val) => {
						console.log(val)
						setVolume(val)
						SettingsConfig.volume = val
					}}
				/>
			</div>
		</>
	)
}
