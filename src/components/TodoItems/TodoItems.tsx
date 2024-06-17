import { InfoBlock } from "../InfoBlock";
import { TodoItem } from "../TodoItem";

function TodoItems() {
	return (
		<ul className="mt-[-40px] mx-5 bg-white dark:bg-dark-desaturatedBlue rounded-md overflow-hidden sm:mx-24 xl:mx-[30vw] 2xl:mt-[-80px]">
			<TodoItem></TodoItem>
			<InfoBlock></InfoBlock>
		</ul>
	);
}

export { TodoItems };
