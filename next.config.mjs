/** @type {import('next').NextConfig} */

import dotenv from "dotenv";
dotenv.config();

const nextConfig = {
	env: {
		API_KEY: process.env.API_KEY,
		AUTH_DOMAIN: process.env.AUTH_DOMAIN,
		PROJECT_ID: process.env.PROJECT_ID,
		STORAGE_BUCKET: process.env.STORAGE_BUCKET,
		MESSAGING_SENDER_ID: process.env.MESSAGING_SENDER_ID,
		APP_ID: process.env.APP_ID,
		MEASUREMENT_ID: process.env.MEASUREMENT_ID,
		SERVICE_ID: process.env.SERVICE_ID,
		TEMPLATE_ID: process.env.TEMPLATE_ID,
		PUBLIC_KEY: process.env.PUBLIC_KEY,
	},
	// experimental: {
	// 	optimizePackageImports: [
	// 		"@emailjs/browser",
	// 		"@hookform/resolvers",
	// 		"@radix-ui/react-dropdown-menu",
	// 		"@radix-ui/react-label",
	// 		"@radix-ui/react-slot",
	// 		"@rehype-pretty/transformers",
	// 		"@vercel/analytics",
	// 		"@vercel/speed-insights",
	// 		"class-variance-authority",
	// 		"clsx",
	// 		"dotenv",
	// 		"firebase",
	// 		"framer-motion",
	// 		"gray-matter",
	// 		"katex",
	// 		"next",
	// 		"next-themes",
	// 		"react",
	// 		"react-dom",
	// 		"react-hook-form",
	// 		"rehype-autolink-headings",
	// 		"rehype-katex",
	// 		"rehype-pretty-code",
	// 		"rehype-slug",
	// 		"rehype-stringify",
	// 		"remark-gfm",
	// 		"remark-math",
	// 		"remark-parse",
	// 		"remark-rehype",
	// 		"tailwind-merge",
	// 		"tailwindcss-animate",
	// 		"unified",
	// 		"zod",
	// 	],
	// },
	transpilePackages: ["shiki"],
};
export default nextConfig;
