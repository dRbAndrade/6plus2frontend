import Card from "react-bootstrap/Card"
import ButtonBlack from "../components/buttonBlack"
import {BsChevronRight} from 'react-icons/bs'
import Container from "react-bootstrap/Container"
import { useNavigate } from 'react-router';
import "../styles/categories.scss"

const sneakerCategories = [
  {
    name: "Street",
    image: "https://i.imgur.com/b1m2xqI.png",
    url: 'casual'
  },
  {
    name: "corrida",
    image: "https://i.imgur.com/mgVLtEL.png",
    url: 'corrida'
  },
  {
    name: "Skate",
    image: "https://i.imgur.com/uimEu3T.png",
    url: 'skate'
  },
  {
    name: "Trail",
    image: "https://i.imgur.com/ekhpznY.png",
    url: 'aventura'
  },
]

const Categories = () => {
  const navigate = useNavigate();
  return(
    <>
      <Container>
      <h1 className="categoryTitle">Encontre seu estilo</h1>
      </Container>
      
      <Container className="d-flex justify-content-center cardCategory">
      
      {sneakerCategories.map((category) => (
          <Card key={category.name} className="cardBody border-0">
            <Card.Img className="categoryImage" variant="top" src={category.image} />
            <Card.Body className="buttonCategory p-0">
              <ButtonBlack handleSubmit={()=>navigate(`/products?category=${category.url}`)} style={{height: '4.8rem'}}buttonIcon={<BsChevronRight className="arrowRight" />}>{category.name}</ButtonBlack>
            </Card.Body>
          </Card>
      ))}
      </Container>  
   </>
  )

}


export default Categories;