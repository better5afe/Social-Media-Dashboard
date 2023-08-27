import { useContext } from 'react';
import { ThemeContext } from '../context/theme-context';
import ModeToggler from './subcomponents/ModeToggler';
import Container from 'react-bootstrap/Container';

import './DashboardHeader.css';

const DashboardHeader = () => {
	const themeCtx = useContext(ThemeContext);

	let switchToMode = themeCtx.isLightModeActive ? 'Dark Mode' : 'Light Mode';

	return (
		<header className='header'>
			<Container>
				<div className='info-box pt-4 pb-3 mb-3'>
					<h1 className='mb-0 fs-3 fw-bold'>Social Media Dashboard</h1>
					<p className='grayed-text mb-0 fw-bold'>Total Followers: 23,004</p>
				</div>
				<div className='d-flex justify-content-between align-items-center pb-4'>
					<p className='grayed-text mb-0 fw-bold'>{switchToMode}</p>
					<ModeToggler />
				</div>
			</Container>
		</header>
	);
};

export default DashboardHeader;
