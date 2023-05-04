import Link from "next/link";

export default function MainPage() {
	return (
		<main>
			<Link
				href={{
					pathname: "/chat/" + Math.floor(Math.random() * 9999),
				}}
			>
				Go chat
			</Link>
		</main>
	);
}
