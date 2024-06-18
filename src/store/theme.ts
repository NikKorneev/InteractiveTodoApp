import { create } from "zustand";

type Theme = {
	theme: "dark" | "light";
	changeTheme: () => void;
};

export const useTheme = create<Theme>()((set) => ({
	theme:
		window.matchMedia &&
		window.matchMedia("(prefers-color-scheme: dark)").matches
			? "dark"
			: "light",
	changeTheme: () =>
		set((state) => {
			if (state.theme === "dark") return { theme: "light" };
			else return { theme: "dark" };
		}),
}));
