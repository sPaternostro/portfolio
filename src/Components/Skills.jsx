import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container, Row, Col } from 'react-bootstrap';
import bootstrapIcon from '../assets/img/bootstrap.png'
import cssIcon from '../assets/img/css.png'
import gitIcon from '../assets/img/git.png'
import githubIcon from '../assets/img/github.png'
import htmlIcon from '../assets/img/html.png'
import javaIcon from '../assets/img/java.png'
import javascriptIcon from '../assets/img/javascript.png'
import mysqlIcon from '../assets/img/mysql.png'
import nodeIcon from '../assets/img/node.png'
import reactIcon from '../assets/img/react.png'
import colorGrad from '../assets/img/color-sharp.png'

export const Skills = () => {
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
                        <h2>Skills</h2>
                        <p>This is the stack I currently use. <br/> Im constantly working on improving my skills and acquiring new. <br/> More technologies are coming soon! <br/> Follow me on LinkedIn & GitHub to know what i'm working on at the moment. </p>
                        <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                            <div className="item">
                                <img src={htmlIcon} alt="skill img" />
                                <h5>HTML5</h5>
                            </div>
                            <div className="item">
                                <img src={cssIcon} alt="skill img" />
                                <h5>CSS3</h5>
                            </div>
                            <div className="item">
                                <img src={javascriptIcon} alt="skill img" />
                                <h5>Javascript</h5>
                            </div>
                            <div className="item">
                                <img src={reactIcon} alt="skill img" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={bootstrapIcon} alt="skill img" />
                                <h5>Bootstrap/React-Bootstrap</h5>
                            </div>
                            <div className="item">
                                <img src={javaIcon} alt="skill img" />
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src={mysqlIcon} alt="skill img" />
                                <h5>MySQL</h5>
                            </div>
                            <div className="item">
                                <img src={gitIcon} alt="skill img" />
                                <h5>Git</h5>
                            </div>
                            <div className="item">
                                <img src={githubIcon} alt="skill img" />
                                <h5>GitHub</h5>
                            </div>
                            <div className="item">
                                <img src={nodeIcon} alt="skill img" />
                                <h5>NodeJs</h5>
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
