import { Container, Row, Col, Tab } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { ProjectCard } from './ProjectCard';
import colorGrad2 from '../assets/img/color-sharp2.png';
import demoCalculadora from '../assets/img/demo_calculadora.png'
import demoClickCounter from '../assets/img/demo_clickcounter.png'
import demoSegundaWeb from '../assets/img/demo_segundaweb.png'
import demoCocktail from '../assets/img/demo_cocktaildb.png'
import demoGrocery from '../assets/img/demo_grocery bud.png'
import demoWeather from '../assets/img/demo_weather.png'
import demoOrg from '../assets/img/demo_org.png'
import demoEncrypt from '../assets/img/demo_encriptador.png'
import comingSoon from '../assets/img/coming_soon.jpg'

export const Projects = () => {
	const projects1 = [
		// Tengo que incluir los screenshot de cada projecto
		// Tab 1
		{
			title: 'Cocktail Database',
			desc: 'Consuming an API, I show you all kinds of cocktails. You can search for any cocktail you want, and check its details. Made in REACT',
			imgUrl: demoCocktail,
			link: "https://spaternostro.github.io/cocktail-sp/"
		},
		{
			title: 'GroceryBud',
			desc: 'Grocery List made in REACT to learn CRUD developing. It also has localStorage.',
			imgUrl: demoGrocery,
			link: "https://spaternostro.github.io/grocery-list/"
		},
		{
			title: 'Weather App',
			desc: 'Weather app, (phone)widget-like. Consuming an API, lets you search for any city in the world and check its 7 forecast, among other information.',
			imgUrl: demoWeather,
			link: "https://spaternostro.github.io/weather/"
		},
	];

	const projects2 = [
		// Tab 2
		{
			title: 'Calculator',
			desc: 'My first calculator, made in REACT with the help of freeCodeCamp (Thank you!)',
			imgUrl: demoCalculadora,
			link: "https://spaternostro.github.io/react-calculadora/"
		},
		{
			title: 'Click Counter',
			desc: 'Click Counter, very simple. Created on my first steps of my react journey.',
			imgUrl: demoClickCounter,
			link: "https://spaternostro.github.io/react-contador-clicks/"
		},
		{
			title: 'Landing Page',
			desc: 'My first landing page, created with a Mobile First approach.',
			imgUrl: demoSegundaWeb,
			link: "https://spaternostro.github.io/segunda-web/"
		},
	];

	const projects3 = [
		// Tab 3
		{
			title: 'Org',
			desc: 'Created using REACT, as a part of Oracle Next Education scholarship. Its a website to manage teams, you can create workers profiles by areas, create new areas (developer, QA, etc), and change its colors.',
			imgUrl: demoOrg,
			link: "https://spaternostro.github.io/organizacion/"
		},
		{
			title: 'Encryption',
			desc: 'First more complex challenge. I had to develop a website to encrypt a message with a certain password/code, and be able to desencrypt it as well',
			imgUrl: demoEncrypt,
			link: "https://spaternostro.github.io/encriptador-js/"
		},
		{
			title: 'Coming Soon',
			desc: '',
			imgUrl: comingSoon,
		},
	];

	return (
		<section
			className='project'
			id='projects'
		>
			<Container>
				<Row>
					<Col>
						<h2>Projects</h2>
						<p>Here's a showcase of what I've built so far. <br/> 1st Tab are my top 3 favorite projects. <br/> 2nd Tab shows the ABC of the FrontEnd developing journey. <br/> 3rd Tab shows what I've built for Oracle Next Education. </p>
						<Tab.Container
							id='projects-tabs'
							defaultActiveKey='first'
						>
							<Nav
								variant='pills'
								className='nav-pills mb-5 justify-content-center align-items-center'
								id='pills-tab'
							>
								<Nav.Item>
									<Nav.Link eventKey='first'
									>My Favs</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey='second'
									>ABC</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey='third' >ONE</Nav.Link>
								</Nav.Item>
							</Nav>
							<Tab.Content>
								<Tab.Pane eventKey='first'>
									<Row>
										{projects1.map((project, index) => {
											return (
												<ProjectCard
													key={index}
													{...project}
												/>
											);
										})}
									</Row>
								</Tab.Pane>
								<Tab.Pane eventKey='second'>
								<Row>
										{projects2.map((project, index) => {
											return (
												<ProjectCard
													key={index}
													{...project}
												/>
											);
										})}
									</Row>
								</Tab.Pane>
								<Tab.Pane eventKey='third'>
								<Row>
										{projects3.map((project, index) => {
											return (
												<ProjectCard
													key={index}
													{...project}
												/>
											);
										})}
									</Row>
								</Tab.Pane>
							</Tab.Content>
						</Tab.Container>
					</Col>
				</Row>
			</Container>
			<img
				src={colorGrad2}
				alt=''
				className='bg-img-right'
			/>
		</section>
	);
};
