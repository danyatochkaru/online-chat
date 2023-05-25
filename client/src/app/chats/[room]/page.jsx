import Link from "next/link";

import s from "./style.module.scss";
import classNames from "classnames";

const getData = async () => {
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
	const online = Math.floor(Math.random() * 555);
	return { online, account: ME, messages: MESSAGES };
};

export default async function ChatRoomPage({ params }) {
	const { room } = params;
	const { account, messages, online } = await getData();
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

	return (
		<main className={s.wrapper}>
			<div className={s.cont}>
				<div className={s.sidebar}>
					<h3 className={s.title}>Онлайн чат</h3>
					<p>
						Онлайн: <span>{online}</span>
					</p>
					<div className={s.flex_v_center}>
						<p>Код комнаты</p>
						<button className={s.outline}>#{room}</button>
					</div>
					<div className={classNames(s.info, s.account)}>
						<div className={s.flex_v_center}>
							Вы вошли как
							<h4 className="font-medium">{account.username}</h4>
						</div>
						<Link
							href={"/chats"}
							className={classNames(s.btn, s.outline)}
						>
							К списку чатов
						</Link>
						<Link
							href={"/"}
							className={classNames(
								s.logout_btn,
								s.btn,
								s.outline,
								s.danger
							)}
						>
							Выйти
						</Link>
					</div>
				</div>
				<div className={s.chat}>
					<div className={s.messages}>
						{messages.map((item) => (
							<div
								key={item.id}
								className={classNames(s.item, {
									[s.self]: item.author.id == account.id,
								})}
							>
								<p
									className={classNames(s.text, {
										[s.self]: item.author.id == account.id,
									})}
								>
									{item.text}
								</p>
								<div className={s.info}>
									<h5
										className={s.author}
										style={{
											color:
												item.author.id == account.id
													? "inherit"
													: COLORS[
															item.author.id.charCodeAt() %
																COLORS.length
													  ],
										}}
									>
										{item.author.id == account.id
											? "Вы"
											: item.author.username}
									</h5>
									<time>
										{item.date.toLocaleTimeString("ru", {
											timeStyle: "short",
										})}
									</time>
								</div>
							</div>
						))}
					</div>
					<form className={s.input}>
						<input className={s.text} placeholder="Сообщение" />
						<button className={classNames(s.send_btn)}>
							Отправить
						</button>
					</form>
				</div>
			</div>
		</main>
	);
}
