/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Manrope', 'system-ui', 'sans-serif'],
				mono: ['"JetBrains Mono"', 'monospace'],
			},
		},
	},
	plugins: [require("daisyui"), require('@tailwindcss/typography')],
	daisyui: {
    themes: [{
        light: {
          ...require("daisyui/src/theming/themes")["light"],
					"base-100": "#FFFFFF",
					"base-200": "#F1F5F9",
					"base-300": "#E2E8F0",
					"base-content": "#0F172A",
					"primary": "#0284C7",
					"primary-content": "#FFFFFF",
					"accent": "#0284C7",
					"accent-content": "#FFFFFF",
					"neutral": "#64748B",
					"neutral-content": "#FFFFFF",
        },
      },{
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
					"base-100": "#0F172A",
					"base-200": "#1E293B",
					"base-300": "#334155",
					"base-content": "#F1F5F9",
					"primary": "#38BDF8",
					"primary-content": "#0F172A",
					"accent": "#38BDF8",
					"accent-content": "#0F172A",
					"neutral": "#94A3B8",
					"neutral-content": "#0F172A",
        },
      }],
  },
}
