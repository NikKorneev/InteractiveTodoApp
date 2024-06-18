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

	const handleClick = (filter: FilterState) => () => {
		changeFilter(filter);
	};
	return (
		<div className="dark:text-dark-lightBlue dark:bg-dark-desaturatedBlue  flex justify-center gap-5 bg-white shadow-md rounded-md mt-5 mx-5 xl:mx-[30vw] sm:mx-24 py-5 xl:text-base text-sm font-semibold">
			{filters.map((item) => {
				return (
					<button
						key={item}
						className={`${
							filterStore === item && "text-primary"
						} dark:hover:text-dark-lightBlueHover hover:text-dark-lightBlueHover capitalize`}
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
