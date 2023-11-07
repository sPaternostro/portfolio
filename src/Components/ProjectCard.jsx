import { Col } from "react-bootstrap"

export const ProjectCard = ({title, desc, imgUrl, link}) => {
    return (
        <Col sm={6} md={4}>
            <a href={link} target="_blank" rel="noopener noreferrer" className="link">
            <div className="project-imgbox">
                <img src={imgUrl} className="card_img" />
                <div className="project-txt">
                    <h4>{title}</h4>
                    <span>{desc}</span>
                </div>
            </div>
            </a>
        </Col>
    )
}