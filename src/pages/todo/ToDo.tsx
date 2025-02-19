import Database from '@tauri-apps/plugin-sql'
import { useEffect, useState } from 'react'

interface ToDoTask {
	id: number
	title: string
	description: string | null
	created_date: string
	edited_date: string
	start_date: string | null
	finish_date: string | null
	closed_date: string | null
}

export const ToDo = () => {
	const [db, setDb] = useState<Database | null>(null)
	const [todo, setTodo] = useState<ToDoTask[]>()

	const loadDataBase = async () => {
		const bb = await Database.load('sqlite:life-planner.db')
		setDb(bb)

		bb.select('SELECT * FROM TodoTasks')
			.then((res: any) => {
				setTodo(res)
				console.log(res)
			})
			.catch((err) => {
				console.log(err)
			})
	}

	useEffect(() => {
		loadDataBase()
	}, [])

	const onToDoCreate = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const formData = new FormData(e.currentTarget)
		const title = formData.get('title') as string

		const currentDate = new Date().toISOString()
		db?.execute(
			`INSERT INTO TodoTasks 
            (title, created_date, edited_date) 
            VALUES 
            ($1, $2, $3)`,
			[title, currentDate, currentDate]
		)
		loadDataBase()
	}

	const onToDoDelete = (id: number) => {
		db?.execute(`DELETE FROM TodoTasks WHERE id = $1`, [id])
		loadDataBase()
	}

	const onTaskComplete = () => {
		const sound = new Audio('/public/sounds/minecraft_anvil.mp3')
		sound.play()
	}

	return (
		<div className='p-4'>
			<header className='header-type1'>
				<form onSubmit={onToDoCreate} className='flex flex-row gap-2'>
					<input
						autoComplete='off'
						type='text'
						name='title'
						placeholder='Название для задачи...'
					/>
					<button type='submit' className='button-type1'>
						Создать
					</button>
				</form>
			</header>
			<ul className='py-3 flex flex-col gap-1'>
				{todo?.map((item) => (
					<li key={item.id} className='box-type1'>
						<span>{item.title}</span>
						<div className='box-type1-options'>
							<button type='button' onClick={onTaskComplete}>
								✅
							</button>
							<button type='button'>✏️</button>
							<button
								type='button'
								onClick={() => onToDoDelete(item.id)}
							>
								❌
							</button>
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}
