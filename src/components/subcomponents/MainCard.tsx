import useIcons from '../../utils/useIcons';

import './MainCard.css';

interface MainCardProps {
	socialMedia: string;
	username: string;
	followersAmt: string;
	followersAmtDiff: string;
	difference: string;
}

const MainCard: React.FC<MainCardProps> = ({
	socialMedia,
	username,
	followersAmt,
	followersAmtDiff,
	difference,
}) => {
	const icons = useIcons(socialMedia, difference);

	return (
		<div className='col-12 col-xl-3 px-xl-1'>
			<div
				className='card-box position-relative py-4 mb-4 mb-xl-0 rounded'
			>
				<div className='d-flex justify-content-center align-items-center flex-column'>
					<div className='d-flex align-items-center'>
						{icons.logo}
						<h3 className='card-title grayed-text mb-0 fw-bold'>
							&nbsp;&nbsp;@{username}
						</h3>
					</div>
					<p className='followers-amount display-3 mb-0 mt-3 fw-bold'>
						{followersAmt}
					</p>
					<p className='grayed-text followers mb-3 text-uppercase'>Followers</p>
					<div className='d-flex align-items-center'>
						{icons.indicator}
						<p
							className={`indicator mb-0 fw-bold ${
								difference === 'positive' ? 'positive' : 'negative'
							}`}
						>
							&nbsp;{followersAmtDiff} Today
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainCard;
