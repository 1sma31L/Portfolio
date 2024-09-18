import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],

	theme: {
		extend: {
			keyframes: {
				scroll: {
					from: { transform: "translateX(0)" },
					to: { transform: "translateX(-100%)" },
				},
			},

			animation: {
				scroll: "scroll 30s linear infinite",
			},

			typography: (theme: (arg0: string) => any) => ({
				DEFAULT: {
					css: {
						code: {
							backgroundColor: theme("colors.gray.200"),
							overflow: "auto",
							borderRadius: "4px",
							padding: "0.2rem 0.4rem",
							color: theme("colors.purple.600"),
							fontWeight: "600",
							fontSize: "0.875rem",
						},

						pre: {
							backgroundColor: theme("colors.gray.900"),
							color: theme("colors.gray.100"),
							padding: "1rem",
							borderRadius: "8px",
							overflow: "auto",
							fontSize: "0.875rem",
						},

						"code::before": {
							content: '""',
						},

						"code::after": {
							content: '""',
						},
					},
				},
			}),

			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},

			container: {
				center: true,
				padding: "0.4rem",
				screens: {
					sm: "100%",
					md: "650px",
					lg: "730px",
					xl: "900px",
				},
			},

			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			colors: {
				background: "hsl(var(--background))",

				foreground: "hsl(var(--foreground))",

				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},

				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},

				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},

				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},

				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},

				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},

				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},

				border: "hsl(var(--border))",

				input: "hsl(var(--input))",

				ring: "hsl(var(--ring))",

				chart: {
					"1": "hsl(var(--chart-1))",
					"2": "hsl(var(--chart-2))",
					"3": "hsl(var(--chart-3))",
					"4": "hsl(var(--chart-4))",
					"5": "hsl(var(--chart-5))",
				},
			},
		},
	},
	variants: {
		extend: {
			typography: ["dark"],
		},
	},
	plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};

export default config;
