import classNames from "classnames";
import s from "./style.module.scss";
import Link from "next/link";

const getChats = async () => {
	const rooms = [null, null, null, null, null, null];
	return rooms.map(() => ({
		id: Math.floor(Math.random() * 5000),
		online: Math.floor(Math.random() * 555),
	}));
};

const getAccount = async () => ({
	id: "3",
	username: "Admin",
});

export default async function ChatsPage() {
	const rooms = await getChats();
	const account = await getAccount();

	return (
		<main className={s.wrapper}>
			<div className={s.cont}>
				<div className={s.header}>
					<h2 className={s.title}>Комнаты</h2>{" "}
					<div className={s.flex_v_center}>
						Вы вошли как
						<h4 className="font-medium">{account.username}</h4>
					</div>
				</div>
				<ul className="flex flex-col gap-y-2  w-full">
					{rooms.map((room) => (
						<li key={room.id}>
							<Link
								href={{
									pathname: "/chats/" + room.id,
								}}
								className={classNames(s.btn, s.outline)}
							>
								<h4>#{room.id}</h4>
								<p>
									Онлайн: <span>{room.online}</span>
								</p>
							</Link>
						</li>
					))}
				</ul>
				<div className={s.footer}>
					<button>На главную</button>
					<button>Выйти</button>
				</div>
			</div>
		</main>
	);
}
