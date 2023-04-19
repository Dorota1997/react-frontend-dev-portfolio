/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				electroBlue: '#5828E3',
				smoke: '#333232',
				darkSmoke: '#272727'
			},
			gridTemplateColumns: {
				bio: '250px 1fr'
			},
			fontFamily: {
				book: ['Book']
			},
			boxShadow: {
				glow: 'inset 0 0px 20px rgb(88 40 227 / 70%);',
				glowOuter: '0 0px 20px rgb(88 40 227 / 70%);',
				glowWhite: '0 0px 20px rgb(255 255 255 / 70%);'
			}
		}
	},
	plugins: []
};
