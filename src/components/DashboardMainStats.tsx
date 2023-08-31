import MainCard from './subcomponents/MainCard';
import Container from 'react-bootstrap/Container';

import { mainStats } from '../utils/dummy-data';

const DashboardMainStats = () => {
	return (
		<Container className='container mb-5'>
			<section className='main-stats p-2'>
				<div className='row'>
					{mainStats.map((mainStat) => (
						<MainCard
							key={mainStat.id}
							socialMedia={mainStat.socialMedia}
							username={mainStat.username}
							followersAmt={mainStat.followersAmt}
							followersAmtDiff={mainStat.followersAmtDiff}
							difference={mainStat.difference}
						/>
					))}
				</div>
			</section>
		</Container>
	);
};

export default DashboardMainStats;
