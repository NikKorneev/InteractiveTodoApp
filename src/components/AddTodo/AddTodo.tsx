import { Input, useMediaQuery } from "@chakra-ui/react";

function AddTodo() {
	const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

	return (
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
	);
}

export { AddTodo };
