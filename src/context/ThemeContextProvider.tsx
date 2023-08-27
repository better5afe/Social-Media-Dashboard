import { useState, useEffect } from 'react';
import { ThemeContext } from './theme-context';

interface ThemeContextProps {
	children: React.ReactNode;
}

export const ThemeContextProvider: React.FC<ThemeContextProps> = ({
	children,
}) => {
	const [isLightModeActive, setLightModeActive] = useState(true);

	const toggleThemeHandler = () => {
		setLightModeActive(!isLightModeActive);
	};

	useEffect(() => {
		const body = document.querySelector('body')!;

		if (isLightModeActive) {
			body.classList.add('light-mode');
			body.classList.remove('dark-mode');
		} else {
			body.classList.remove('light-mode');
			body.classList.add('dark-mode');
		}
	}, [isLightModeActive]);

	return (
		<ThemeContext.Provider
			value={{
				isLightModeActive: isLightModeActive,
				toggleThemeHandler: toggleThemeHandler,
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
};
