import '../../styles/globals.scss'

const firstFunction = () => {
	let myVar = 45;
	
	return myVar + Math.random();
}
export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<nav>Navigation</nav>
				<section>First Section</section>
			</body>
		</html>
	)
}