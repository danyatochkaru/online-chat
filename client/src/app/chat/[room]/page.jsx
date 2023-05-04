"use client";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function ChatRoomPage() {
	const MESSAGES = [
		{
			id: "1",
			author: { id: "1", username: "User-1" },
			text: "Text",
			date: new Date(),
		},
		{
			id: "2",
			author: { id: "2", username: "User-2" },
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			date: new Date(),
		},
		{
			id: "3",
			author: { id: "4", username: "User-4" },
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis sunt in culpa qui officia deserunt mollit anim id est laborum. @Admin",
			date: new Date(),
		},
		{
			id: "4",
			author: { id: "3", username: "Admin" },
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			date: new Date(),
		},
		{
			id: "5",
			author: { id: "1", username: "User-1" },
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			date: new Date(),
		},
		{
			id: "6",
			author: { id: "3", username: "Admin" },
			text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			date: new Date(),
		},
		{
			id: "7",
			author: { id: "4", username: "User-4" },
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis sunt in culpa qui officia deserunt mollit anim id est laborum.",
			date: new Date(),
		},
	];
	const ME = {
		id: "3",
		username: "Admin",
	};

	const params = useParams();
	const COLORS = [
		"#996633",
		"#993300",
		"#CC0000",
		"#990033",
		"#996666",
		"#CC0099",
		"#996699",
		"#660099",
		"#330099",
		"#336699",
		"#006666",
		"#009966",
		"#339900",
	];
	const online = 123;

	return (
		<main className="h-screen w-screen flex justify-center shadow-2xl">
			<div className="container mx-auto rounded-xl flex flex-row self-center bg-white">
				<div className="flex flex-col p-5 border-r-2 border-[#939cc3] w-72 bg-[#F7F8F8] rounded-s-xl">
					<h3 className="text-lg font-bold">Онлайн чат</h3>
					<p>
						Онлайн: <span>{online}</span>
					</p>
					<div className="flex items-center gap-x-1">
						<p>Код комнаты</p>
						<p className="cursor-pointer outline-none border border-[#939cc3] py-1 px-2 rounded transition-colors hover:bg-[#939cc3] hover:text-[#F7F8F8]">
							#{params?.room}
						</p>
					</div>
					<div className="mt-auto w-full flex flex-col gap-y-2">
						<div className="flex gap-x-1 items-center">
							Вы вошли как
							<h4 className="font-medium">{ME.username}</h4>
						</div>
						<Link
							href={"/"}
							className="flex justify-center w-full border border-[#939cc3] py-1 px-2 rounded transition-colors hover:bg-[#f44336] hover:text-[#F7F8F8] hover:border-[#f44336]"
						>
							Выйти
						</Link>
					</div>
				</div>
				<div className="p-5 w-full flex flex-col gap-y-4">
					<div className="h-[80vh] overflow-auto flex flex-col gap-y-4">
						{MESSAGES.map((item) => (
							<div
								key={item.id}
								className={`w-fit sm:max-w-[80%] ${
									item.author.id == ME.id
										? "self-end"
										: "self-start"
								}`}
							>
								<p
									className={`p-2 w-fit rounded-xl whitespace-break-spaces ${
										item.author.id == ME.id
											? "bg-[#F7F8F8] text-black rounded-br-none border border-[#3650a4]"
											: "bg-[#3650a4] text-[#F7F8F8] rounded-bl-none"
									}`}
								>
									{item.text}
								</p>
								<div className="w-full px-2 flex gap-x-2">
									<h5
										className="text-sm font-medium"
										style={{
											color:
												item.author.id == ME.id
													? "inherit"
													: COLORS[
															item.author.id.charCodeAt() %
																COLORS.length
													  ],
										}}
									>
										{item.author.id == ME.id
											? "Вы"
											: item.author.username}
									</h5>
									<time className="opacity-70 text-sm ml-auto">
										{item.date.toLocaleTimeString("ru", {
											timeStyle: "short",
										})}
									</time>
								</div>
							</div>
						))}
					</div>
					<form className="w-full flex">
						<input
							className="flex-1 outline-none border border-[#939cc3] border-r-0 p-2 rounded-s transition-colors focus:border-[#3650a4] hover:bg-[#F7F8F8] focus:bg-[#F7F8F8]"
							placeholder="Сообщение"
						/>
						<button className="border border-[#939cc3] bg-[#939cc3] text-white p-2 rounded-e transition-colors hover:bg-[#3650a4] hover:border-[#3650a4]">
							Отправить
						</button>
					</form>
				</div>
			</div>
		</main>
	);
}
