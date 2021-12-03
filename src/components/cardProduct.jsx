import '../styles/cardProduct.scss'
import Card from "react-bootstrap/Card"
import ButtonBlack from "../components/buttonBlack"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import { BsChevronRight } from "react-icons/bs";


const CardProduct = ({product})=>{

  return(
    <>
       <Card className="cardProduct">
         <Container className="cardProductImg p-0 m-0">
            <img src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="" />
         </Container>
         <Container className="cardProductGreen">
         <Row className="d-flex w-100 h-100 m-0 justify-content-between ">
             <Col sm={8} className="cardProductInfo">
                <Card.Title><h1>{product.price}</h1></Card.Title>
                <Card.Subtitle><h2>{product.name}</h2></Card.Subtitle>
                <Card.Text><h3>{product.category}</h3></Card.Text>
             </Col>   
             <Col sm={3} className="linkToProduct d-flex align-items-center">
                    <ButtonBlack className="buttonCard" buttonContent={<BsChevronRight className="arrowRight" />}></ButtonBlack>
               </Col>
          </Row>
         </Container>
       </Card>
       
    </>
  )

}

export default CardProduct;