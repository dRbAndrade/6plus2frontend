import Card from "react-bootstrap/Card"
import "../styles/about-card.scss"
import { BsGithub } from "react-icons/bs"
import { BsLinkedin } from "react-icons/bs"


const AboutCard = ({name,url,description,linkedin,github})=>{

  return(
    <Card className="about-card">
      <div>
        <Card.Img src = {url}/>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </div>
      <div className="links-container">
        <a href={linkedin} target="_blank" rel="noreferrer"><i className="icon-linkedin"><BsLinkedin /></i></a>
        <a href={github} target="_blank" rel="noreferrer"><i className="icon-github"><BsGithub /></i></a>
      </div>
    </Card>
  )

}


export default AboutCard;