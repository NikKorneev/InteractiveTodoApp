import { StateCreator } from "zustand";
import { Todo } from "../types/todo";
import { v4 as uuidv4 } from "uuid";

export interface TodoSlice {
	todos: Todo[];
	addTodo: (text: string, checked: boolean) => void;
	removeTodo: (id: Todo["id"]) => void;
	change: (id: Todo["id"]) => void;
	removeAllChecked: () => void;
	setTodos: (todos: Todo[]) => void;
}

export const createTodoSlice: StateCreator<
	TodoSlice,
	[["zustand/immer", never], ["zustand/persist", TodoSlice]],
	[],
	TodoSlice
> = (set) => ({
	todos: [],
	addTodo: (text, isChecked) =>
		set((state) => {
			state.todos.push({ text, id: uuidv4(), isChecked });
		}),
	removeTodo: (id) =>
		set((state) => {
			state.todos = state.todos.filter((item) => item.id !== id);
		}),
	change: (id) =>
		set((state) => {
			state.todos = state.todos.map((item) => {
				if (item.id === id)
					return { ...item, isChecked: !item.isChecked };
				return item;
			});
		}),
	removeAllChecked: () =>
		set((state) => {
			state.todos = state.todos.filter((item) => item.isChecked !== true);
		}),
	setTodos: (todos) =>
		set((state) => {
			state.todos = todos;
		}),
});
