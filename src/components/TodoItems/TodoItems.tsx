import { useTodoStore } from "../../store";
import { InfoBlock } from "../InfoBlock";
import { TodoItem } from "../TodoItem";

function TodoItems() {
	const items = useTodoStore((state) => state.todos);
	const removeTodo = useTodoStore((state) => state.removeTodo);
	const changeCheck = useTodoStore((state) => state.change);

	const handleRemoveTodo = (id: number) => {
		return () => {
			removeTodo(id);
		};
	};
	const handleCheckChange = (id: number) => {
		return () => {
			changeCheck(id);
		};
	};

	return (
		<ul className="mt-[-40px] mx-5 bg-white dark:bg-dark-desaturatedBlue rounded-md overflow-hidden sm:mx-24 xl:mx-[30vw] 2xl:mt-[-80px]">
			{items.length > 0 ? (
				items.map((item) => (
					<TodoItem
						key={item?.id}
						{...item}
						changeCheck={handleCheckChange(item?.id)}
						deleteTodo={handleRemoveTodo(item?.id)}
					/>
				))
			) : (
				<h2 className="text-light-darkGray dark:text-dark-lightBlue text-base md:text-xl xl:text-3xl py-2 text-center text-bold">
					Add your first Todo!
				</h2>
			)}
			<InfoBlock></InfoBlock>
		</ul>
	);
}

export { TodoItems };
