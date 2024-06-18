import { create } from "zustand";
import { FilterSlice, createFilterSlice } from "./filters";
import { TodoSlice, createTodoSlice } from "./todos";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export const useTodoStore = create<FilterSlice & TodoSlice>()(
	devtools(
		immer(
			persist(
				(...a) => ({
					...createFilterSlice(...a),
					...createTodoSlice(...a),
				}),
				{ name: "TodoStore" }
			)
		)
	)
);
