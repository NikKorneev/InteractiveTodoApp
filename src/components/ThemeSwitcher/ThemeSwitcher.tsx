import { IconButton } from "@chakra-ui/react";
import MoonIcon from "../../assets/icon-moon.svg?react";
import SunIcon from "../../assets/icon-sun.svg?react";

export const ThemeSwitcher = () => {
	return (
		<IconButton
			aria-label="Change Theme"
			icon={dark ? <SunIcon /> : <MoonIcon />}
			background={"transparent"}
			_hover={""}
		></IconButton>
	);
};
