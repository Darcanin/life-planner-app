import './style.sass'
import { useRef, useEffect, useState } from 'react'

interface IInputRangeProps extends React.HTMLAttributes<HTMLDivElement> {
	min: number
	max: number
	step: number
	value: number
	setValue: (val: number) => void
	trackColor?: string
	thumbColor?: string
}

export const InputRange = ({
	min,
	max,
	step,
	value,
	setValue,
	trackColor,
	thumbColor,
	...rest
}: IInputRangeProps) => {
	const [currentValue, setCurrentValue] = useState(value)
	const trackRef = useRef<HTMLDivElement>(null)
	const isDragging = useRef(false)

	// Вычисляем новое значение по позиции клика/курсор
	const calculateValue = (clientX: number): number => {
		if (!trackRef.current) return value
		const rect = trackRef.current.getBoundingClientRect()
		let ratio = (clientX - rect.left) / rect.width
		if (ratio < 0) ratio = 0
		if (ratio > 1) ratio = 1
		let newValue = min + ratio * (max - min)
		newValue = Math.round(newValue / step) * step
		return newValue
	}

	const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
		isDragging.current = true
		const newVal = calculateValue(e.clientX)
		calcCurrentValue(newVal)
	}

	const onMouseMove = (e: MouseEvent) => {
		if (!isDragging.current) return
		const newVal = calculateValue(e.clientX)
		calcCurrentValue(newVal)
	}

	const onMouseUp = () => {
		isDragging.current = false
	}

	useEffect(() => {
		window.addEventListener('mousemove', onMouseMove)
		window.addEventListener('mouseup', onMouseUp)
		return () => {
			window.removeEventListener('mousemove', onMouseMove)
			window.removeEventListener('mouseup', onMouseUp)
		}
	}, [])

	const calcCurrentValue = (value: number) => {
		setCurrentValue(value)
		setValue(value)
	}

	return (
		<div
			className='input-type1'
			ref={trackRef}
			onMouseDown={onMouseDown}
			{...rest}
			style={{
				...rest.style,
			}}
		>
			<div
				style={{
					left: `${((currentValue - min) / (max - min)) * 100}%`,
				}}
			/>
		</div>
	)
}
