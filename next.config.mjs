/**
 * Configuration file for environment variables.
 *
 * This file exports an object that defines environment variables required for the application's
 * OAuth authentication and public API access. These variables must be set in the environment
 * before running the application. This setup supports authentication via Google, Microsoft,
 * and Apple OAuth 2.0 services, as well as defining the public API URL for client-side requests.
 *
 * Ensure that these environment variables are securely set in your deployment environment.
 */

export default {
	env: {
		// Google OAuth 2.0 Client ID for authentication
		GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
		// Google OAuth 2.0 Client Secret for authentication
		GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
		
		// Microsoft OAuth 2.0 Client ID for authentication
		MICROSOFT_CLIENT_ID: process.env.MICROSOFT_CLIENT_ID,
		// Microsoft OAuth 2.0 Client Secret for authentication
		MICROSOFT_CLIENT_SECRET: process.env.MICROSOFT_CLIENT_SECRET,
		
		// Apple OAuth 2.0 Client ID for authentication
		APPLE_CLIENT_ID: process.env.APPLE_CLIENT_ID,
		// Apple OAuth 2.0 Client Secret for authentication
		APPLE_CLIENT_SECRET: process.env.APPLE_CLIENT_SECRET,
		
		// Public API URL for client-side requests
		NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
	},
};
