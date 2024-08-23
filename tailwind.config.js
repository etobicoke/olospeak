/**
 * Tailwind CSS Configuration File
 *
 * This file is used to customize the behavior of Tailwind CSS in your project.
 * It defines where Tailwind should look for class names to generate the appropriate styles.
 * Additionally, you can extend the default theme and add custom plugins here.
 *
 * @type {import('tailwindcss').Config} - This indicates that the configuration follows the `tailwindcss` Config type, providing type-checking and IntelliSense support.
 */

module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",      // Include all JavaScript and TypeScript files in the 'pages' directory and subdirectories
		"./components/**/*.{js,ts,jsx,tsx}", // Include all JavaScript and TypeScript files in the 'components' directory and subdirectories
	],
	theme: {
		extend: {
			// Custom colors for primary and secondary use cases
			colors: {
				primary: '#007BFF',
				secondary: '#6C757D',
			},
			// Custom font families
			fontFamily: {
				sans: ['Helvetica', 'Arial', 'sans-serif'],
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
	],
}


