// import withPWA from 'next-pwa';

/**
 * Configuration file for environment variables and PWA setup.
 *
 * This file exports an object that defines environment variables required for the application's
 * OAuth authentication and public API access. It also configures the application as a Progressive
 * Web App (PWA) using the next-pwa package.
 *
 * Ensure that these environment variables are securely set in your deployment environment.
 */

// export default withPWA({
// 	env: {
// 		// Google OAuth 2.0 Client ID for authentication
// 		GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
// 		// Google OAuth 2.0 Client Secret for authentication
// 		GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
		
// 		// Microsoft OAuth 2.0 Client ID for authentication
// 		MICROSOFT_CLIENT_ID: process.env.MICROSOFT_CLIENT_ID,
// 		// Microsoft OAuth 2.0 Client Secret for authentication
// 		MICROSOFT_CLIENT_SECRET: process.env.MICROSOFT_CLIENT_SECRET,
		
// 		// Apple OAuth 2.0 Client ID for authentication
// 		APPLE_CLIENT_ID: process.env.APPLE_CLIENT_ID,
// 		// Apple OAuth 2.0 Client Secret for authentication
// 		APPLE_CLIENT_SECRET: process.env.APPLE_CLIENT_SECRET,
		
// 		// Public API URL for client-side requests
// 		NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
// 	},
// 	pwa: {
// 		dest: 'public', // This is where the generated service worker and other files will be stored
// 		disable: process.env.NODE_ENV === 'development', // Disable PWA in development mode
// 		register: true,
// 		skipWaiting: true,
// 	},
// });
/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;