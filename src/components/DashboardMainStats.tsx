import MainCard from './subcomponents/MainCard';
import { mainStats } from '../utils/dummy-data';

import './DashboardMainStats.css';

const DashboardMainStats = () => {
	return (
		<section className='main-stats'>
			{mainStats.map((mainStat) => (
				<MainCard
					key={mainStat.id}
					id={mainStat.id}
					socialMedia={mainStat.socialMedia}
					username={mainStat.username}
					followersAmt={mainStat.followersAmt}
					followersAmtDiff={mainStat.followersAmtDiff}
					difference={mainStat.difference}
				/>
			))}
		</section>
	);
};

export default DashboardMainStats;
