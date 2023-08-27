import { useContext } from 'react';
import { ThemeContext } from '../../context/theme-context';

import './ModeToggler.css';

const ModeToggler = () => {
	const themeCtx = useContext(ThemeContext);

	const toggleThemeHandler = () => {
		themeCtx.toggleThemeHandler();
	};

	return (
		<button
			className={
				themeCtx.isLightModeActive
					? 'toggler-btn active'
					: 'toggler-btn inactive'
			}
			onClick={toggleThemeHandler}
		></button>
	);
};

export default ModeToggler;
