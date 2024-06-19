import { useTodoStore } from "../../store";

type ItemsProps = {
	itemsLeft: number;
};

function InfoBlock({ itemsLeft }: ItemsProps) {
	const removeAllChecked = useTodoStore((state) => state.removeAllChecked);

	return (
		<div className="justify-between flex p-5">
			<p className="text-sm text-light-darkBlueGray xl:text-base">
				{itemsLeft !== 0 && itemsLeft + " items left"}
			</p>
			<button
				className="text-sm text-light-darkBlueGray xl:text-base"
				onClick={removeAllChecked}
				disabled={itemsLeft === 0}
			>
				Clear completed
			</button>
		</div>
	);
}

export { InfoBlock };
