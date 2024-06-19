import { Draggable } from "react-beautiful-dnd";
import { TodoItem, TodoItemProps } from "../TodoItem";
import { Todo } from "../../types/todo";

interface IDraggable extends Omit<TodoItemProps, "ref"> {
	id: Todo["id"];
	index: number;
}

export const DraggableElement = (props: IDraggable) => {
	return (
		<Draggable
			draggableId={props.id.toString()}
			index={props.index}
			key={props.id}
		>
			{(provided) => (
				<div
					ref={provided.innerRef}
					{...provided.draggableProps}
					{...provided.dragHandleProps}
				>
					<TodoItem {...props} />
				</div>
			)}
		</Draggable>
	);
};
