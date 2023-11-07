import logo from '../assets/img/logo.png';
import linkedin from '../assets/img/nav-icon1.svg';
import github from '../assets/img/nav-icon3.png';

export const Footer = () => {
	return (
		<footer>
			<div className='footer'>
				<img
					src={logo}
					alt=''
					className='footer_logo'
				/>

				<div className='social-icon'>
					<a href='https://www.linkedin.com/in/spaternostro99/' target='_blank' rel='noopener noreferrer'>
						<img
							src={linkedin}
							alt='linkedin icon'
						/>
					</a>
					<a href='https://github.com/sPaternostro' target='_blank' rel='noopener noreferrer'>
						<img
							src={github}
							alt='github icon'
						/>
					</a>
				</div>
				<p>&copy; Sebastian Paternostro, 2023.</p>
			</div>
		</footer>
	);
};
