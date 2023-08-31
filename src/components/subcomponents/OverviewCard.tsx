import useIcons from '../../utils/useIcons';

interface OverviewCardProps {
	socialMedia: string;
	title: string;
	statAmt: string;
	overviewDiff: string;
	difference: string;
}

const OverviewCard: React.FC<OverviewCardProps> = ({
	socialMedia,
	title,
	statAmt,
	overviewDiff,
	difference,
}) => {
	const icons = useIcons(socialMedia, difference);

	return (
		<div className='col-12 col-xl-3 px-xl-1'>
			<div className='card-box p-4 mb-4 mb-xl-2 rounded'>
				<div>
					<div className='d-flex justify-content-between align-items-center'>
						<h3 className='card-title grayed-text mb-0 fw-bold'>{title}</h3>
						{icons.logo}
					</div>
					<div className='d-flex justify-content-between align-items-end'>
						<p className='followers-amount display-6 mb-0 mt-3 fw-bold'>
							{statAmt}
						</p>
						<div className='d-flex align-items-center'>
							{icons.indicator}
							<p
								className={`indicator mb-0 fw-bold ${
									difference === 'positive' ? 'positive' : 'negative'
								}`}
							>
								&nbsp;{overviewDiff} Today
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OverviewCard;
