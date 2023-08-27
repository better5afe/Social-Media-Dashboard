import FacebookIcon from '../assets/icons/FacebookIcon';
import TwitterIcon from '../assets/icons/TwitterIcon';
import InstagramIcon from '../assets/icons/InstagramIcon';
import YoutubeIcon from '../assets/icons/YoutubeIcon';
import IconUp from '../assets/icons/IconUp';
import IconDown from '../assets/icons/IconDown';

const useIcons = (socialMedia: string, difference: string) => {
	let logo;
	let indicator;

	switch (socialMedia) {
		case 'facebook':
			logo = <FacebookIcon />;
			break;
		case 'twitter':
			logo = <TwitterIcon />;
			break;
		case 'instagram':
			logo = <InstagramIcon />;
			break;
		case 'youtube':
			logo = <YoutubeIcon />;
			break;
		default:
			logo = '';
	}

	switch (difference) {
		case 'positive':
			indicator = <IconUp />;
			break;
		case 'negative':
			indicator = <IconDown />;
			break;
		default:
			indicator = '';
	}

	return { logo, indicator };
};

export default useIcons;
