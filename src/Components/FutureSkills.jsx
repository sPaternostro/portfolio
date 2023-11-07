import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container, Row, Col } from 'react-bootstrap';
import sassIcon from '../assets/img/sass.png'
import angularIcon from '../assets/img/angular.png'
import graphqlIcon from '../assets/img/graphql.png'
import tailwindIcon from '../assets/img/tailwind.png'
import mongodbIcon from '../assets/img/mongodb.png'
import nextjsIcon from '../assets/img/nextjs.png'
import colorGrad from '../assets/img/color-sharp2.png'

export const FutureSkills = () => {
	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};

	return (
        <section className="skill" id='skills'>
            <Container>
                <Row>
                    <Col>
                    <div className="skill-box">
                        <h2>To be Learnt</h2>
                        <p>This is the stack I plan to learn in the near future. <br/> Those are technologies I'm interested in learning and/or what the market is demanding right now. <br/> Follow me on LinkedIn & GitHub to know what i'm working on at the moment. </p>
                        <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                            <div className="item">
                                <img src={angularIcon} alt="skill img" />
                                <h5>Angular</h5>
                            </div>
                            <div className="item">
                                <img src={mongodbIcon} alt="skill img" />
                                <h5>MongoDB</h5>
                            </div>
                            <div className="item">
                                <img src={nextjsIcon} alt="skill img" />
                                <h5>NextJS</h5>
                            </div>
                            <div className="item">
                                <img src={tailwindIcon} alt="skill img" />
                                <h5>Tailwind</h5>
                            </div>
                            <div className="item">
                                <img src={sassIcon} alt="skill img" />
                                <h5>SASS</h5>
                            </div>
                            <div className="item">
                                <img src={graphqlIcon} alt="skill img" />
                                <h5>GraphQL</h5>
                            </div>
                            
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
            <img src={colorGrad} alt="color gradient" className="bg-img-left" />
        </section>
    )
};
