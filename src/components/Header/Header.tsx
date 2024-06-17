import { AddTodo } from "../AddTodo/AddTodo";
import { ThemeSwitcher } from "../ThemeSwitcher";

export const Header = () => {
	return (
		<>
			<header className="dark:bg-[url('/src/assets/bg-mobile-dark.jpg')] dark:xl:bg-[url('/src/assets/bg-desktop-dark.jpg')] bg-[url('/src/assets/bg-mobile-light.jpg')] xl:bg-[url('/src/assets/bg-desktop-light.jpg')] bg-no-repeat py-10 bg-cover min-h-[35vh] px-5 sm:px-24 xl:px-[30vw]">
				<div className="mb-5 flex justify-between items-center">
					<h1 className="xl:text-6xl xl:tracking-widest font-semibold tracking-wider text-light-blueGray text-[35px] uppercase">
						Todo
					</h1>
					<ThemeSwitcher></ThemeSwitcher>
				</div>

				<AddTodo></AddTodo>
			</header>
		</>
	);
};
