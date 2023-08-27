import useIcons from '../../utils/useIcons';

import './MainCard.css';

interface MainCardProps {
	id: number;
	socialMedia: string;
	username: string;
	followersAmt: number;
	followersAmtDiff: number;
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
		<div
			id={socialMedia}
			className='card-box position-relative py-4 mb-4 rounded'
		>
			<div className='d-flex justify-content-center align-items-center flex-column'>
				<div className='d-flex align-items-center'>
					{icons.logo}
					<h2 className='username grayed-text mb-0 fw-bold'>
						&nbsp;&nbsp;@{username}
					</h2>
				</div>
				<p className='followers-amount display-2 mb-0 mt-3 fw-bold'>
					{followersAmt}
				</p>
				<p className='grayed-text followers mb-3 text-uppercase'>Followers</p>
				<div className='d-flex align-items-center'>
					{icons.indicator}
					<p
						className={`'indicator-time mb-0 fw-bold ${
							difference === 'positive' ? 'positive' : 'negative'
						}`}
					>
						&nbsp;{followersAmtDiff} Today
					</p>
				</div>
			</div>
		</div>
	);
};

export default MainCard;
