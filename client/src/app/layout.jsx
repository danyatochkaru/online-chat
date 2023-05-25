import "./globals.scss";

export const metadata = {
	title: "Chat danyatochkaru",
	description: "Online chat danyatochkaru",
};

export default function RootLayout({ children }) {
	return (
		<html lang="ru">
			<body className="bg-light-blue ">{children}</body>
		</html>
	);
}
