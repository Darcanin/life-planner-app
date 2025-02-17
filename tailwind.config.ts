import { Config } from 'tailwindcss'

const config: Config = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,css,sass}'],
	theme: {
		extend: {
			colors: {
				bg: '#181818',
				primary: '#FFF',
				secondary: '#AAAAAA',
				grey: '#202020',
				darkGrey: '#383838',
				black: '#121212',
				red: '#CC0000',
				blue: '#3EA6FF',
				white: '#FFF',
				pink: '#F86782',
				purple: '#282A36',
			},
		},
	},
	plugins: [],
}

export default config
