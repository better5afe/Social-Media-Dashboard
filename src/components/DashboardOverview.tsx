import OverviewCard from './subcomponents/OverviewCard';
import Container from 'react-bootstrap/Container';

import { overviewStats } from '../utils/dummy-data';

const DashboardOverview = () => {
	return (
		<Container className='container'>
			<section className=' p-2'>
				<h2 className='grayed-text fs-4 mb-4 fw-bold'>Overview - Today</h2>
				<div className='row'>
					{overviewStats.map((overviewStat) => (
						<OverviewCard
							key={overviewStat.id}
							socialMedia={overviewStat.socialMedia}
							title={overviewStat.title}
							statAmt={overviewStat.statAmt}
							overviewDiff={overviewStat.overviewDiff}
							difference={overviewStat.difference}
						/>
					))}
				</div>
			</section>
		</Container>
	);
};

export default DashboardOverview;
