import { useMemo } from "react";
import { useTodoStore } from "../../store";
import { FilterState } from "../../store/filters";

const filters: FilterState[] = [
	FilterState["all"],
	FilterState["active"],
	FilterState["completed"],
];

function Filters() {
	const filterStore = useTodoStore((state) => state.filterState);
	const changeFilter = useTodoStore((state) => state.setFilterState);
	const items = useTodoStore((state) => state.todos);

	const isDisabled = useMemo(() => {
		if (
			items.find((item) => item.isChecked) &&
			items.find((item) => !item.isChecked)
		) {
			return false;
		} else {
			changeFilter(FilterState["all"]);
			return true;
		}
	}, [items]);

	const handleClick = (filter: FilterState) => () => {
		changeFilter(filter);
	};

	return (
		<div className="dark:text-dark-lightBlue dark:bg-dark-desaturatedBlue  flex justify-center gap-5 bg-white shadow-md rounded-md mt-5 mx-5 xl:mx-[30vw] sm:mx-24 py-5 xl:text-base text-sm font-semibold">
			{filters.map((item) => {
				return (
					<button
						key={item}
						disabled={
							item === FilterState["all"] ? false : isDisabled
						}
						className={`${
							filterStore === item && "text-primary"
						}  hover:text-dark-lightBlueHover capitalize disabled:text-light-lightBlueGray dark:disabled:text-gray-600`}
						onClick={handleClick(item)}
					>
						{item}
					</button>
				);
			})}
		</div>
	);
}

export { Filters };
