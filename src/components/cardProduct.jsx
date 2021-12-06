import '../styles/cardProduct.scss'
import Card from "react-bootstrap/Card"
import ButtonBlack from "../components/buttonBlack"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const CardProduct = ({product,handleButton,buttonIcon})=>{

  const {image,title,category} = product;
  let {price} = product;
  price = price ? price.toFixed(2):price;
  return(
    <>
       <Card className="cardProduct">
         <Card.Img variant="top" src={image}/>
         <Container className="cardProductGreen g-0">
         <Row className="d-flex w-100 h-100 m-0">
            <Col sm={8} className="d-flex flex-column pt-4 ps-4 g-0">
              <Card.Title className="mb-0"><h2>{`R$ ${price}`}</h2></Card.Title>
              <Card.Subtitle className="mb-0"><h3>{title}</h3></Card.Subtitle>
              <Card.Text className="mb-0"><span>{category}</span></Card.Text>
            </Col>   
            <Col className="d-flex align-items-center g-0">
              <ButtonBlack className="buttonCard" handleSubmit={handleButton} buttonIcon={buttonIcon}/>
            </Col>
          </Row>
         </Container>
       </Card>
       
    </>
  )

}

export default CardProduct;