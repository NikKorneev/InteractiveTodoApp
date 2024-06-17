import { IconButton } from "@chakra-ui/react";
import CheckIcon from "../../assets/icon-check.svg?react";
import CrossIcon from "../../assets/icon-cross.svg?react";

function TodoItem() {
	return (
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
	);
}

export { TodoItem };
