/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [require("daisyui"), require('@tailwindcss/typography')],
	daisyui: {
    themes: [{
        light: {
          ...require("daisyui/src/theming/themes")["light"],
					"primary": "#1962d7",
					".hero-1": {
						"color": "#1962d7"
					},
					".hero-2": {
						"color": "#1b4ab1"
					},
					".hero-3": {
						"color": "#16338c"
					},
					".hero-4": {
						"color": "#0b1d69"
					},
					".hero-5": {
						"color": "#000748"
					},
        },
      },{
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
					".hero-1": {
						"color": "#506fd6"
					},
					".hero-2": {
						"color": "#325dad"
					},
					".hero-3": {
						"color": "#1f4b85"
					},
					".hero-4": {
						"color": "#16385d"
					},
					".hero-5": {
						"color": "#142538"
					},
        },
      }],
  },
}
