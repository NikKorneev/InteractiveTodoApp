/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				light: {
					DEFAULT: "hsl(0, 0%, 98%)",
					blueGray: "hsl(236, 33%, 92%)",
					lightBlueGray: "hsl(233, 11%, 84%)",
					darkBlueGray: "hsl(236, 9%, 61%)",
					darkGray: "hsl(235, 19%, 35%)",
				},
				dark: {
					DEFAULT: "hsl(235, 21%, 11%)",
					desaturatedBlue: "hsl(235, 24%, 19%)",
					lightBlue: "hsl(234, 39%, 85%)",
					lightBlueHover: "hsl(236, 33%, 92%)",
					darkGrayBlue: "hsl(234, 11%, 52%)",
					darkBlue: "hsl(233, 14%, 35%)",
				},
			},
			fontSize: {
				DEFAULT: "18px",
			},
		},
	},
	plugins: [],
};
