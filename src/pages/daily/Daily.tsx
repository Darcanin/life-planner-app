import { useEffect, useState } from 'react'
import Database from '@tauri-apps/plugin-sql'
// import type { QueryResult } from "@tauri-apps/plugin-sql";

interface DailyTask {
	id: number
	title: string
	created_date: string
	edited_date: string
	streak: number
}

export const Daily = () => {
	const [db, setDb] = useState<Database | null>(null)
	const [daily, setDaily] = useState<DailyTask[]>()

	const loadDataBase = async () => {
		const bb = await Database.load('sqlite:life-planner.db')
		setDb(bb)

		bb.select('SELECT * FROM DailyTasks')
			.then((res: any) => {
				setDaily(res)
				console.log(res)
			})
			.catch((err) => {
				console.log(err)
			})
	}

	useEffect(() => {
		loadDataBase()
	}, [])

	const onDailySubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const formData = new FormData(e.currentTarget)
		const title = formData.get('title') as string

		console.log(title)

		if (!db) return
		const currentDate = new Date().toISOString()

		db.execute(
			`INSERT INTO DailyTasks 
			(title, created_date, edited_date, streak) 
			VALUES 
			($1, $2, $3, $4)`,
			[title, currentDate, currentDate, 0]
		)
		loadDataBase()
	}

	const onDailyDelete = (id: number) => {
		if (!db) return

		db.execute(`DELETE FROM DailyTasks WHERE id = $1`, [id])
		loadDataBase()
	}

	return (
		<>
			<div className='p-4'>
				<header className='px-3 py-2 flex flex-row gap-3 border border-gray-600 rounded'>
					<div className='filters'>
						<form
							className='flex flex-row gap-2'
							onSubmit={onDailySubmit}
						>
							<input
								type='search'
								placeholder='Название...'
								name='title'
							/>
							<button
								type='submit'
								className='px-3 py-2 rounded bg-white/5 transition-colors hover:bg-white/15 transform-duration-300'
							>
								Сохранить
							</button>
						</form>
					</div>
				</header>
				<ul className='p-4 flex flex-col gap-1'>
					{daily ? (
						daily.map((task: DailyTask) => {
							return (
								<li
									key={task.id}
									className='custom-container-type1 flex flex-row justify-between'
								>
									<span>{task.title}</span>
									<button
										type='button'
										onClick={() => {
											onDailyDelete(task.id)
										}}
									>
										❌
									</button>
								</li>
							)
						})
					) : (
						<div>Задач не найдено</div>
					)}
				</ul>
			</div>
		</>
	)
}
