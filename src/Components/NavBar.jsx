import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';
import logo from '../assets/img/logo.png';
import linkedin from '../assets/img/nav-icon1.svg';
import github from '../assets/img/nav-icon3.png';

export const NavBar = () => {
	const [activeLink, setActiveLink] = useState('home');
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			if (window.scrollY > 50) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener('scroll', onScroll);

		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	const onUpdateActiveLink = (value) => {
		setActiveLink(value);
	};

	return (
		<Navbar
			// expand='md'
			className={scrolled ? 'scrolled' : ''}
		>
			<Container>
				<Navbar.Brand href='#home'>
					<img
						src={logo}
						alt=' sPaternostro logo'
						className='logo nav_logo'
					/>
				</Navbar.Brand>

				<Navbar.Toggle aria-controls='basic-navbar-nav'>
					<span className='navbar-toggler-icon'></span>
				</Navbar.Toggle>
				<Navbar.Collapse
					id='basic-navbar-nav'
					className='navbar_collapse'
				>
					<Nav>
						<Nav.Link
							href='#home'
							className={
								activeLink === 'home' ? 'active navbar-link' : 'navbar-link'
							}
							onClick={() => onUpdateActiveLink('home')}
						>
							Home
						</Nav.Link>
						<Nav.Link
							href='#skills'
							className={
								activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'
							}
							onClick={() => onUpdateActiveLink('skills')}
						>
							Skills
						</Nav.Link>
						<Nav.Link
							href='#projects'
							className={
								activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'
							}
							onClick={() => onUpdateActiveLink('projects')}
						>
							Projects
						</Nav.Link>
					</Nav>
					<span className='navbar-text'>
						<div className='social-icon'>
							<a
								href='https://www.linkedin.com/in/spaternostro99/'
								target='_blank'
								rel='noopener noreferrer'
							>
								<img
									src={linkedin}
									alt='linkedin icon'
								/>
							</a>
							<a
								href='https://github.com/sPaternostro'
								target='_blank'
								rel='noopener noreferrer'
							>
								<img
									src={github}
									alt='github icon'
								/>
							</a>
						</div>
					</span>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
