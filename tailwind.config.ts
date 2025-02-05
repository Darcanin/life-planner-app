import { Config } from 'tailwindcss'

const config: Config = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,css,sass}'],
	theme: {
		extend: {
			colors: {
				primary: '#56A8A1',
				secondary: '#A3D9A5',
				background: '#E6F4F1',
				surface: '#C3D5C2',
				highlight: '#2D6F73',
				'soft-highlight': '#D7F0D5',
				text: '#4A4A4A',
				border: '#DADADA',
			},
		},
	},
	plugins: [],
}

export default config

// ### 🎨 Спокойная бирюзово-зелёная тема для десктопного приложения
// Эта палитра ориентирована на мягкие, натуральные оттенки бирюзы и зелени, создающие ощущение уюта, спокойствия и лёгкости восприятия.

// ---
// ## **🎨 Основные цвета**
// ### **1. Бирюзовый (Primary) – #56A8A1**
// 📌 *Основной акцентный цвет, используемый для выделения важных элементов* (выбранные вкладки, кнопки действий, ссылки).
// ✅ Почему: успокаивающий, не агрессивный, но при этом хорошо выделяется.

// ### **2. Нежно-зелёный (Secondary) – #A3D9A5**
// 📌 *Используется для второстепенных кнопок, подчёркивания активных элементов, выделения сообщений об успехе (успешное выполнение задачи).*
// ✅ Почему: мягкий, природный, приятный глазу, гармонирует с бирюзовым.

// ---
// ## **🎨 Фоновые цвета**
// ### **3. Светлый мятный (Background) – #E6F4F1**
// 📌 *Фоновый цвет для главной части интерфейса (список задач, карточки, форма ввода).*
// ✅ Почему: даёт ощущение простора, не нагружает зрение.
// ### **4. Серо-зелёный (Surface) – #C3D5C2**
// 📌 *Используется для карточек, панелей, модальных окон.*
// ✅ Почему: слегка контрастирует с фоном, но не делает его тяжёлым.

// ---
// ## **🎨 Дополнительные цвета**
// ### **5. Тёмно-бирюзовый (Highlight) – #2D6F73**
// 📌 *Используется для активных элементов, выделения текущего состояния, иконок.*
// ✅ Почему: приятный, но более контрастный к основному бирюзовому, создаёт чёткую визуальную иерархию.

// ### **6. Бледно-зелёный (Soft Highlight) – #D7F0D5**
// 📌 *Для лёгкого выделения элементов, фоновых теней, обводок.*
// ✅ Почему: создаёт мягкий эффект объёма без резкости.

// ### **7. Тёплый серый (Text) – #4A4A4A**
// 📌 *Основной цвет текста (названия задач, настройки, описание).*
// ✅ Почему: нейтральный, мягкий для глаз, контрастирует с фоном, но не выглядит жёстко.

// ### **8. Светло-серый (Border) – #DADADA**
// 📌 *Разделительные линии, границы карточек и кнопок.*
// ✅ Почему: подчёркивает границы, не делая их слишком навязчивыми.

// ---

// ## **🔹 Итоговый стиль**
// ✔ Природные оттенки зелёного и бирюзового создают эффект свежести и спокойствия.
// ✔ Минимальный контраст делает интерфейс ненапряжённым для глаз.
// ✔ Лёгкие серые и бледно-зелёные оттенки помогают сбалансировать композицию.

// Хочешь, чтобы я помог подобрать оттенки для конкретных элементов твоего интерфейса? 😊
