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
	experimental: {
		optimizePackageImports: ["react-icons/*", "lucide-react", "date-fns"],
	},
	transpilePackages: ["shiki"],
};
export default nextConfig;
