import Card from "react-bootstrap/Card"
import "../styles/about-card.scss"

const AboutCard = ({name,url,description,linkedin,github})=>{

  return(
    <Card className="about-card">
      <div>
        <Card.Img src = {url}/>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </div>
      <div className="links-container">
        <a href={linkedin}target="_blank" rel="noreferrer"><i className="icon-linkedin"></i></a>
        <a href={github}target="_blank" rel="noreferrer"><i className="icon-github"></i></a>
      </div>
    </Card>
  )

}


export default AboutCard;