import { Flex, IconButton, Input, Text, useMediaQuery } from "@chakra-ui/react";
import MoonIcon from "./assets/icon-moon.svg?react";
import SunIcon from "./assets/icon-sun.svg?react";
import CheckIcon from "./assets/icon-check.svg?react";
import CrossIcon from "./assets/icon-cross.svg?react";
import { useState } from "react";

function App() {
	const dark = true;
	const [isChecked, setIsChecked] = useState(false);
	const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

	return (
		<main className="container min-h-screen sm:max-w-[100%]">
			<header className="dark:bg-[url('/src/assets/bg-mobile-dark.jpg')] dark:xl:bg-[url('/src/assets/bg-desktop-dark.jpg')] bg-[url('/src/assets/bg-mobile-light.jpg')] xl:bg-[url('/src/assets/bg-desktop-light.jpg')] bg-no-repeat py-10 bg-cover min-h-[35vh] px-5 sm:px-24 xl:px-[30vw]">
				<div className="mb-5 flex justify-between items-center">
					<h1 className="xl:text-6xl xl:tracking-widest font-semibold tracking-wider text-light-blueGray text-[35px] uppercase">
						Todo
					</h1>
					<IconButton
						aria-label="Change Theme"
						icon={dark ? <SunIcon /> : <MoonIcon />}
						background={"transparent"}
						_hover={""}
					></IconButton>
				</div>

				<div className="flex items-center justify-center bg-white rounded-md py-3 pl-[20px] pr-3 dark:bg-dark-desaturatedBlue">
					<button
						disabled
						className="rounded-full border w-6 h-6 border-light-darkBlueGray"
					></button>
					<Input
						variant="unstyled"
						type="text"
						fontSize={isLargerThan800 ? "16px" : "12px"}
						padding={"5px 10px 5px 10px"}
						placeholder="Create a new todo..."
						textColor={dark ? "hsl(234, 39%, 85%)" : "#353535"}
					/>
				</div>
			</header>

			{/*todoItem */}

			<ul className="mt-[-40px] mx-5 bg-white dark:bg-dark-desaturatedBlue rounded-md overflow-hidden sm:mx-24 xl:mx-[30vw] 2xl:mt-[-80px]">
				<li
					className={`${
						isChecked && "bg-[#ececec]"
					} after:w-[100%] after:h-[1px] after:left-0 after:bg-light-darkBlueGray after:absolute after:bottom-0 relative flex justify-between items-center px-3 py-4 text-xs bg-white dark:bg-dark-desaturatedBlue`}
				>
					<button
						className={`flex-shrink-0 flex-grow-0 flex justify-center items-center rounded-full bg-slate-300 size-8 bg-gradient-to-r
					from-sky-500 to-[hsl(280,_87%,_65%)] hover:bg-gradient-to-bl hover:shadow-md transition-all hover:scale-110`}
						onClick={() => setIsChecked((prev) => !prev)}
					>
						<div
							className={`w-7 h-7 rounded-full absolute transition-all ${
								!isChecked
									? "bg-white/100 dark:bg-dark-desaturatedBlue/100"
									: "bg-white/0 dark:bg-dark-desaturatedBlue/0"
							}`}
						></div>
						<CheckIcon />
					</button>
					<p
						className={`text-light-darkGray ${
							isChecked && "line-through text-light-darkBlueGray"
						} flex-shrink flex-grow-0 max-w-[60%] sm:text-base 2xl:max-w-[80%] dark:text-dark-lightBlue`}
					>
						Something that i should to
						dodododododododdddododododododsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
					</p>
					<IconButton
						aria-label="delete todo"
						icon={<CrossIcon stroke={dark ? "#bebebe" : ""} />}
						background={"transparent"}
					></IconButton>
				</li>

				{/* info */}
				<div className="justify-between flex p-5">
					<p className="text-sm text-light-darkBlueGray xl:text-base">
						5 items left
					</p>
					<button className="text-sm text-light-darkBlueGray xl:text-base">
						Clear completed
					</button>
				</div>
			</ul>

			{/* filters */}

			<div className="dark:text-dark-lightBlue dark:bg-dark-desaturatedBlue  flex justify-center gap-5 bg-white shadow-md rounded-md mt-5 mx-5 xl:mx-[30vw] sm:mx-24 py-5 xl:text-base text-sm font-semibold">
				<button className="text-primary dark:hover:text-dark-lightBlueHover hover:text-dark-lightBlueHover">
					All
				</button>
				<button className="dark:hover:text-dark-lightBlueHover hover:text-dark-lightBlueHover">
					Active
				</button>
				<button className="dark:hover:text-dark-lightBlueHover hover:text-dark-lightBlueHover">
					Completed
				</button>
			</div>

			<p className="px-5 mt-8 text-center text-light-darkBlueGray">
				Drag and drop to reorder the list
			</p>
			<p className="mt-5 text-center text-light-lightBlueGray text-sm">
				Made by Nikita Korneev in 2024
			</p>
		</main>
	);
}

export default App;
