module.exports = {
	content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				linen: "#F5EBE0",
				champagnePink: "#E3D5CA",
				paleSilver: "#D6CCC2",
			},
		},
	},
	plugins: [
		{
			tailwindcss: {},
			autoprefixer: {},
		},
	],
};
