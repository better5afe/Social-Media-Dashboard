import React from 'react';

interface ThemeContextInterface {
	isLightModeActive: boolean;
	toggleThemeHandler: () => void;
}

export const ThemeContext = React.createContext<ThemeContextInterface>({
	isLightModeActive: true,
	toggleThemeHandler: () => {},
});
