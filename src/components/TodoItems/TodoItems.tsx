import { useMemo } from "react";
import { useTodoStore } from "../../store";
import { InfoBlock } from "../InfoBlock";
import { FilterState } from "../../store/filters";
import { DraggableElement } from "../DraggableElement/DraggableElement";
import { Todo } from "../../types/todo";

interface ITodoItems {
	children: React.ReactNode;
}

function TodoItems({ children }: ITodoItems) {
	const items = useTodoStore((state) => state.todos);
	const removeTodo = useTodoStore((state) => state.removeTodo);
	const changeCheck = useTodoStore((state) => state.change);
	const filterStore = useTodoStore((state) => state.filterState);

	const handleRemoveTodo = (id: Todo["id"]) => {
		return () => {
			removeTodo(id);
		};
	};
	const handleCheckChange = (id: Todo["id"]) => {
		return () => {
			changeCheck(id);
		};
	};

	const length = useMemo(() => {
		return items.length;
	}, [items]);

	const filteredStore = useMemo(() => {
		if (filterStore === FilterState["all"]) return items;
		if (filterStore === FilterState["completed"])
			return items.filter((item) => item.isChecked === true);
		if (filterStore === FilterState["active"])
			return items.filter((item) => item.isChecked !== true);
	}, [items, filterStore]);

	return (
		<ul className="mt-[-40px] mx-5 bg-white dark:bg-dark-desaturatedBlue rounded-md overflow-hidden sm:mx-24 xl:mx-[30vw] 2xl:mt-[-80px]">
			{filteredStore?.length ? (
				filteredStore?.map((item, i) => (
					<DraggableElement
						key={item?.id}
						index={i}
						{...item}
						changeCheck={handleCheckChange(item?.id)}
						deleteTodo={handleRemoveTodo(item?.id)}
					/>
				))
			) : (
				<h2 className="text-light-darkGray dark:text-dark-lightBlue text-base md:text-xl xl:text-2xl py-3 text-center text-bold">
					Add your first Todo
				</h2>
			)}
			{children}
			<InfoBlock itemsLeft={length}></InfoBlock>
		</ul>
	);
}

export { TodoItems };
