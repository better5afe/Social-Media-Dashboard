import DashboardHeader from './components/DashboardHeader';
import DashboardMainStats from './components/DashboardMainStats';
import DashboardOverview from './components/DashboardOverview';
import Container from 'react-bootstrap/Container';
import { ThemeContextProvider } from './context/ThemeContextProvider';

import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
	return (
		<ThemeContextProvider>
			<DashboardHeader />
			<main className='main'>
				<Container>
					<DashboardMainStats />
					<DashboardOverview />
				</Container>
			</main>
		</ThemeContextProvider>
	);
};

export default App;
