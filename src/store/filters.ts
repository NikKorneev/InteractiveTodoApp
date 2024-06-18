import { StateCreator } from "zustand";

export enum FilterState {
	active = "active",
	all = "all",
	completed = "completed",
}

export interface FilterSlice {
	filterState: FilterState;
	setFilterState: (filter: FilterState) => void;
}

export const createFilterSlice: StateCreator<FilterSlice> = (set) => ({
	filterState: FilterState["all"],
	setFilterState: (filter) => set({ filterState: filter }),
});
