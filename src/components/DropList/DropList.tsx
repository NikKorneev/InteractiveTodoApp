import { DragDropContext, DropResult, Droppable } from "react-beautiful-dnd";
import { TodoItems } from "../TodoItems";
import { useTodoStore } from "../../store";

export const DropList = () => {
	const todos = useTodoStore((state) => state.todos);
	const setTodos = useTodoStore((state) => state.setTodos);

	const onDragEnd = (result: DropResult) => {
		const { destination, source } = result;

		if (!destination) {
			return;
		}

		if (
			destination.droppableId === source.droppableId &&
			destination.index === source.index
		) {
			return;
		}

		const newTodo = Array.from(todos);
		newTodo.splice(source.index, 1);

		newTodo.splice(destination.index, 0, todos[source.index]);

		setTodos(newTodo);
	};

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<Droppable droppableId="droppableList">
				{(provided) => (
					<div ref={provided.innerRef} {...provided.droppableProps}>
						<TodoItems>{provided.placeholder}</TodoItems>
					</div>
				)}
			</Droppable>
		</DragDropContext>
	);
};
