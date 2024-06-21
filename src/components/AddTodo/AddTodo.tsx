import { Input, useMediaQuery } from "@chakra-ui/react";
import { useTheme } from "../../store/theme";
import { useEffect, useState } from "react";
import { useTodoStore } from "../../store";
import CheckIcon from "../../assets/icon-check.svg?react";

function AddTodo() {
	const addTodo = useTodoStore((state) => state.addTodo);
	const [inputVal, setInputVal] = useState("");
	const [isError, setIsError] = useState(false);
	const [isChecked, setIsChecked] = useState(false);
	const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
	const theme = useTheme((state) => state.theme);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputVal(e.target.value);
	};

	useEffect(() => {
		setIsError(inputVal.length === 0 ? true : false);
	}, [inputVal]);

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		e.stopPropagation();

		if (!isError) {
			addTodo(inputVal.trim(), isChecked);
		}
	};

	return (
		<>
			<form
				onSubmit={onSubmit}
				className="flex items-center justify-center bg-white rounded-md py-3 pl-[20px] pr-3 dark:bg-dark-desaturatedBlue"
			>
				<div
					className="flex justify-center items-center rounded-full border w-6 h-6 border-light-darkBlueGray"
					onClick={() => {
						setIsChecked((prev) => !prev);
					}}
				>
					{isChecked && (
						<CheckIcon className=" [&>path]:stroke-light-darkGray [&>path]:dark:stroke-slate-50" />
					)}
				</div>
				<Input
					variant="unstyled"
					type="text"
					fontSize={isLargerThan800 ? "16px" : "12px"}
					padding={"5px 10px 5px 10px"}
					placeholder="Create a new todo..."
					textColor={
						theme === "dark" ? "hsl(234, 39%, 85%)" : "#353535"
					}
					onChange={handleChange}
				/>
			</form>
		</>
	);
}

export { AddTodo };
