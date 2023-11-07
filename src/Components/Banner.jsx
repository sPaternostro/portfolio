import { useState, useEffect } from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import headerImg from '../assets/img/header-img.svg'




export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate = [ "Web Dev", "FrontEnd Dev"]
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(200 - Math.random() * 100)
    const period = 2000

    useEffect(() => {
      let ticker = setInterval(()=> {
        tick()
      }, delta)  

      return () => {
        clearInterval(ticker)
      }
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText)

        if(isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }

        if(!isDeleting && updatedText === fullText) {
            setIsDeleting(true)
            setDelta(period)
        } else if(isDeleting && updatedText === '') {
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setDelta(500)
        }
    }

    return (
       <section className="banner" id="home">
        <Container>
            <Row className='align-items-center'>
                <Col xs={12} md={6} xl={7}>
                    <span className="tagline">
                        Welcome to my Portfolio
                    </span>
                    <h1>{`Hi I'm sPaternostro `} <span className='wrap'><br/>  {text}</span></h1>
                    <p className='desc'> I'm an aspiring FullStack web developer, currently honing my FrontEnd skills, with a passion for creating clean and intuitive websites. Even though I'm working on mastering the MERN stack, I'm open to learning new technologies. <br/> Browse my projects on the tab below and see what I've built so far!</p>
                    <a href="https://www.linkedin.com/in/spaternostro99/" target='_blank' rel='noopener noreferrer' className='link'><button onClick={() => console.log('connect') }> Lets connect <ArrowRightCircle size={25}/> </button></a>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src={headerImg} alt="Header img" />
                </Col>
            </Row>
        </Container>
       </section>
    )
}