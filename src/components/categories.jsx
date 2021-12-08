import Card from "react-bootstrap/Card"
import ButtonBlack from "../components/buttonBlack"
import {BsChevronRight} from 'react-icons/bs'
import Container from "react-bootstrap/Container"
import "../styles/categories.scss"

const sneakerCategories = [
  {
    name: "Street",
    url: "https://i.imgur.com/b1m2xqI.png"
  },
  {
    name: "Corrida",
    url: "https://i.imgur.com/mgVLtEL.png"
  },
  {
    name: "Skate",
    url: "https://i.imgur.com/uimEu3T.png"
  },
  {
    name: "Trail",
    url: "https://i.imgur.com/ekhpznY.png"
  },
]

const Categories = () => {

  return(
    <>
      
      <Container className="d-flex justify-content-center cardCategory">
      
      {sneakerCategories.map((category) => (
          <Card key={category.name} className="cardBody border-0">
            <Card.Img className="categoryImage" variant="top" src={category.url} />
            <Card.Body className="buttonCategory p-0">
              <ButtonBlack style={{height: '4.8rem'}}buttonIcon={<BsChevronRight className="arrowRight" />}>{category.name}</ButtonBlack>
            </Card.Body>
          </Card>
      ))}
      </Container>  
   </>
  )

}


export default Categories;