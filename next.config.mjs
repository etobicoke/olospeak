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
		
		// Public API URL for client-side requests
		NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
	},
};
