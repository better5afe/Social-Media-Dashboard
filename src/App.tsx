import DashboardHeader from './components/DashboardHeader';
import DashboardMainStats from './components/DashboardMainStats';
import DashboardOverview from './components/DashboardOverview';
import { ThemeContextProvider } from './context/ThemeContextProvider';

import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
	return (
		<ThemeContextProvider>
			<DashboardHeader />
			<main className='main position-absolute start-0 end-0'>
					<DashboardMainStats />
					<DashboardOverview />
			</main>
		</ThemeContextProvider>
	);
};

export default App;
