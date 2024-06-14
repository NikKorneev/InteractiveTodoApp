import { Flex, IconButton, Input, Text } from "@chakra-ui/react";
import MoonIcon from "./assets/icon-moon.svg?react";
import SunIcon from "./assets/icon-sun.svg?react";
import CheckIcon from "./assets/icon-check.svg?react";
import CrossIcon from "./assets/icon-cross.svg?react";
import { useState } from "react";

function App() {
	const dark = false;
	const [isChecked, setIsChecked] = useState(false);

	return (
		<main className="container min-h-screen">
			<header className="bg-[url('/src/assets/bg-mobile-light.jpg')] bg-no-repeat py-10 bg-cover min-h-[35vh] px-5">
				<div className="mb-5 flex justify-between items-center">
					<h1 className="font-semibold tracking-wider text-light-blueGray text-[35px] uppercase">
						Todo
					</h1>
					<IconButton
						aria-label="Change Theme"
						icon={dark ? <SunIcon /> : <MoonIcon />}
						background={"transparent"}
						_hover={""}
					></IconButton>
				</div>

				<div className="flex items-center justify-center bg-white rounded-md py-3 pl-[20px] pr-3">
					<button
						disabled
						className="rounded-full border w-6 h-6 border-light-darkBlueGray"
					></button>
					<Input
						variant="unstyled"
						type="text"
						fontSize={"12px"}
						padding={"5px 10px 5px 10px"}
						placeholder="Create a new todo..."
						textColor={"#353535"}
					/>
				</div>
			</header>

			{/*todoItem */}

			<ul className="mt-[-40px] mx-5 bg-white rounded-md overflow-hidden">
				<li
					className={`${
						isChecked && "bg-[#ececec]"
					} after:w-[100%] after:h-[1px] after:left-0 after:bg-light-darkBlueGray after:absolute after:bottom-0 relative flex justify-between items-center px-3 py-4 text-xs bg-white`}
				>
					<button
						className={`flex-shrink-0 flex-grow-0 flex justify-center items-center rounded-full bg-slate-300 size-8 bg-gradient-to-r
					from-sky-500 to-[hsl(280,_87%,_65%)] hover:bg-gradient-to-bl hover:shadow-md transition-all hover:scale-110`}
						onClick={() => setIsChecked((prev) => !prev)}
					>
						<div
							className={`w-7 h-7 rounded-full absolute transition-all ${
								!isChecked ? "bg-white/100" : "bg-white/0"
							}`}
						></div>
						<CheckIcon />
					</button>
					<p
						className={`text-light-darkGray ${
							isChecked && "line-through text-light-darkBlueGray"
						} flex-shrink flex-grow-0 max-w-[60%]`}
					>
						Something that i should to
						dodododododododdddodododododod
					</p>
					<IconButton
						aria-label="delete todo"
						icon={<CrossIcon />}
						background={"transparent"}
					></IconButton>
				</li>
				<li
					className={`${
						isChecked && "bg-[#ececec]"
					} after:w-[100%] after:h-[1px] after:left-0 after:bg-light-darkBlueGray after:absolute after:bottom-0 relative flex justify-between items-center px-3 py-4 text-xs bg-white`}
				>
					<button
						className={`flex-shrink-0 flex-grow-0 flex justify-center items-center rounded-full bg-slate-300 size-8 bg-gradient-to-r
					from-sky-500 to-[hsl(280,_87%,_65%)] hover:bg-gradient-to-bl hover:shadow-md transition-all hover:scale-110`}
						onClick={() => setIsChecked((prev) => !prev)}
					>
						<div
							className={`w-7 h-7 rounded-full absolute transition-all ${
								!isChecked ? "bg-white/100" : "bg-white/0"
							}`}
						></div>
						<CheckIcon />
					</button>
					<p
						className={`text-light-darkGray ${
							isChecked && "line-through text-light-darkBlueGray"
						} flex-shrink flex-grow-0 max-w-[60%]`}
					>
						Something that i should to
						dodododododododdddodododododod
					</p>
					<IconButton
						aria-label="delete todo"
						icon={<CrossIcon />}
						background={"transparent"}
					></IconButton>
				</li>

				{/* info */}
				<div className="justify-between flex p-5">
					<p className="text-sm text-light-darkBlueGray">
						5 items left
					</p>
					<button className="text-sm text-light-darkBlueGray">
						Clear completed
					</button>
				</div>
			</ul>

			{/* filters */}

			<div className="flex justify-center gap-5 bg-white shadow-md rounded-md mt-5 mx-5 py-5 text-sm font-semibold">
				<button className="text-primary">All</button>
				<button>Active</button>
				<button>Completed</button>
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
