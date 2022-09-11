/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./dist/*.html'],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		},
		extend: {
			fontFamily: {
				public: ["'Public Sans', sans-serif"],
				raj: ["'Rajdhani', sans-serif"],
			},
			colors: {
				darkBlue: '#0E172A',
				darkWashedBlue: '#1E293B',
				buttonBlue: '#6466F1',
				highlightBlue: '#0CA5E9',
				lightBlue: '#A5B4FB',
				OOFGrey: '#94A3B8',
				offWhite: '#E2E8F0',
			},
		},
	},
	plugins: [],
};
