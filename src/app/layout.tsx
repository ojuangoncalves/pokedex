import { Metadata } from "next"

import Header from "@/components/Header"
import "../styles/globals.css"

export const metadata: Metadata = {
	title: "Pokedéx"
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body>
				<Header />
				{ children }
			</body>
		</html>
	)
}