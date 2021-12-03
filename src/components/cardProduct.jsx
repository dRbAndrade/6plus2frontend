import '../styles/cardProduct.scss'
import Card from "react-bootstrap/Card"
import ButtonBlack from "../components/buttonBlack"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { useNavigate } from 'react-router'
import { BsChevronRight } from "react-icons/bs";


const CardProduct = ({product})=>{

  const navigate = useNavigate();

  return(
    <>
       <Card className="cardProduct">
         <Card.Img variant="top" src={product.image}/>
         <Container className="cardProductGreen">
         <Row className="d-flex w-100 h-100 m-0">
             <Col sm={9} className="d-flex flex-column pt-4 ps-4 g-0">
                <Card.Title className="mb-0"><h2>{`R$ ${product.price.toFixed(2)}`}</h2></Card.Title>
                <Card.Subtitle className="mb-0"><h3>{product.title}</h3></Card.Subtitle>
                <Card.Text className="mb-0"><h4>{product.category}</h4></Card.Text>
             </Col>   
             <Col className="linkToProduct d-flex align-items-center g-0">
                <ButtonBlack className="buttonCard" handleSubmit={()=>navigate(`/products/${product.id}`)}buttonIcon={<BsChevronRight className="arrowRight" />}></ButtonBlack>
              </Col>
          </Row>
         </Container>
       </Card>
       
    </>
  )

}

export default CardProduct;