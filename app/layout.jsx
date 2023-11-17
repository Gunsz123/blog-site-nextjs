import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Nav from "@/components/Nav";
import Provider from "@/components/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Blogtopia",
	description: "Share your blogs with the world",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${inter.className} bg-bgDark text-darkText`}>
				<Provider>
					<main className="container my-4">
						<Nav />
						{children}
					</main>
				</Provider>
			</body>
		</html>
	);
}
