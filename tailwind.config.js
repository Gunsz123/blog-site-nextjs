/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				workSans: ["Work Sans", "Arial", "sans-serif"], 
				jakartaSans: ["Plus Jakarta Sans", "Arial", "sans-serif"],
			},
			colors: {
				purple: "#6941C6",
				lightText: "#1A1A1A",
				darkText: "#FFFFFF",
				subTextLight: "#667085",
				subTextDark: "#C0C5D0",
				bgDark: "#181A2A",
			},
		},
	},
};


// Work sans for the titles card title mainly
