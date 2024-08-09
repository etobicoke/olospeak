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
	// Specify the paths to all of the template files in your project
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",      // Include all JavaScript and TypeScript files in the 'pages' directory and subdirectories
		"./components/**/*.{js,ts,jsx,tsx}", // Include all JavaScript and TypeScript files in the 'components' directory and subdirectories
	],
	
	// Extend the default theme with custom values (optional)
	theme: {
		extend: {
			// You can add custom colors, spacing, fonts, etc. here
		},
	},
	
	// Add any custom plugins here (optional)
	plugins: [
		// You can include Tailwind CSS plugins such as typography, forms, etc.
	],
}

