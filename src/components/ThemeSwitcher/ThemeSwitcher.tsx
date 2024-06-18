import { IconButton } from "@chakra-ui/react";
import MoonIcon from "../../assets/icon-moon.svg?react";
import SunIcon from "../../assets/icon-sun.svg?react";
import { useTheme } from "../../store/theme";
import { useEffect } from "react";

export const ThemeSwitcher = () => {
	const theme = useTheme((state) => state.theme);
	const changeTheme = useTheme((state) => state.changeTheme);

	useEffect(() => {
		if (theme === "dark") {
			document.body.classList.add("dark");
		} else {
			document.body.classList.remove("dark");
		}
	}, [theme]);

	return (
		<IconButton
			aria-label="Change Theme"
			icon={theme === "dark" ? <SunIcon /> : <MoonIcon />}
			background={"transparent"}
			_hover={""}
			onClick={changeTheme}
		></IconButton>
	);
};
