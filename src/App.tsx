import DashboardHeader from './components/DashboardHeader';
import DashboardMainStats from './components/DashboardMainStats';
import DashboardOverview from './components/DashboardOverview';
import Container from 'react-bootstrap/Container';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
	return (
		<Container className='wrapper' fluid>
				<DashboardHeader />
			<main>
				<DashboardMainStats />
				<DashboardOverview />
			</main>
		</Container>
	);
};

export default App;
