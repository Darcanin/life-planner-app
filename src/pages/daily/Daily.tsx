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
			})
			.catch((err) => {
				console.log(err)
			})
	}

	useEffect(() => {
		loadDataBase()
	}, [])

	const onCreateDaily = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const formData = new FormData(e.currentTarget)
		const title = formData.get('title') as string

		if (!db) return
		const currentDate = new Date().toISOString()

		db.execute(
			`INSERT INTO DailyTasks 
			(title, created_date, edited_date) 
			VALUES 
			($1, $2, $3)`,
			[title, currentDate, currentDate]
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
				<header className='header-type1'>
					<div className='filters'>
						<form
							className='flex flex-row gap-2'
							onSubmit={onCreateDaily}
						>
							<input
								autoComplete='off'
								type='search'
								placeholder='Название...'
								name='title'
							/>
							<button type='submit' className='button-type1'>
								Сохранить
							</button>
						</form>
					</div>
				</header>
				<ul className='py-3 flex flex-col gap-1'>
					{daily ? (
						daily.map((item: DailyTask) => {
							return (
								<li
									key={item.id}
									className='box-type1 flex flex-row justify-between'
								>
									<span>{item.title}</span>
									<button
										type='button'
										onClick={() => {
											onDailyDelete(item.id)
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
