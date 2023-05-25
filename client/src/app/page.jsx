import Link from "next/link";

export default function MainPage() {
	return (
		<main>
			<Link
				href={{
					pathname: "/chats",
				}}
			>
				Go chat
			</Link>
		</main>
	);
}
