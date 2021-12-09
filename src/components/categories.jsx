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
    name: "Corrida",
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

const buttonCategory = document.querySelectorAll(".buttonCategory");

for(let i = 0; i < buttonCategory.length; i++) {
  buttonCategory[i].style.backgroundImage = `url${sneakerCategories[i].image}`
}

const Categories = () => {
  const navigate = useNavigate();
  return(
    <>
      <Container>
      <h1 className="categoryTitle">Encontre seu estilo</h1>
      </Container>
      
      <Container className="d-flex justify-content-center cardCategory">
      
      {sneakerCategories.map((category) => (
          <Card key={category.name} onClick={()=>navigate(`/products?category=${category.url}`)} className="cardBody border-0">
            <Card.Img className="categoryImage" variant="top" src={category.image} />
            <Card.Body className="buttonCategories p-0">
              
               <ButtonBlack 
               handleSubmit={()=>navigate(`/products?category=${category.url}`)} className="buttonCategory" style={{backgroundImage: `url("${category.image}")`}}><span>{category.name}</span></ButtonBlack>
             
              <ButtonBlack 
              handleSubmit={()=>navigate(`/products?category=${category.url}`)} className="buttonCategoryBlack" buttonIcon={<BsChevronRight className="arrowRight" />}>{category.name}</ButtonBlack>
            </Card.Body>
          </Card>
      ))}
      </Container>
   </>
  )

}


export default Categories;