/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		screens: {
			sm: '480px',
			md: '768px'
		},
		fontFamily: {
			sans: ['Hanken Grotesk', 'sans-serif']
		},
		extend: {}
	},
	plugins: []
};
