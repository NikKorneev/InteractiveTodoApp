import { StateCreator } from "zustand";
import { Todo } from "../types/todo";

export interface TodoSlice {
	todos: Todo[];
	addTodo: (text: string, checked: boolean) => void;
	removeTodo: (id: number) => void;
	change: (id: number) => void;
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
			state.todos.push({ text, id: Math.random(), isChecked });
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
});
