import ToggleText from "../components/toggleText"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Header from "../components/header"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import "../styles/product.scss"
import ButtonBlack from "../components/buttonBlack"
import Container from "react-bootstrap/Container"
import ProductSizes from "../components/product-sizes"
import { Helmet } from "react-helmet"
import Breadcrumb from "../components/breadcrumb"
import { CartContext } from "../contexts/CartContext"
import { useContext } from "react"
import { ProductContext } from "../contexts/ProductContext"

const Product  = ()=>{
 
  const [view,setView] = useState()
  const {products,productSizes} = useContext(ProductContext);
  const {id} = useParams();
  const {addItem} = useContext(CartContext);
  const [toggles,setToggles] = useState({}) 


  useEffect(()=>{
    setView(products.filter(e=>e.id===parseInt(id))[0]);
    setToggles(
      [
        {
          title: "Descrição",
          description: view.description
        }, 
        {
          title: "Política de troca",
          description: "Nosso prazo para devolução ou troca é de até 30 dias da data de recebimento em seu local de entrega."
        }
      ]
    )
  },[id,products, view])
  return(

    <>
      <Helmet><title>{`${view&&view.title}`} | 6pluS2store</title></Helmet>
      <div>
      <Header/>
      <main>
        <Container>
          
          <Row className="g-0 mb-5 d-flex justify-content-between">          
            
            <Col className="d-flex g-0 justify-content-start align-items-start" md={{span:6}} lg={{span:6}}>
              <img className="product-image" src={view&&view.image} alt="Product" />
            </Col>
            <Col className="d-flex g-0" md={{span:5}} lg={{span:5}}>
              <Card className="product-info g-0 justify-content-start">
              <Breadcrumb names={["Produtos",(view&&view.title)]} links={["/products",`/products/${view&&view.id}`]}/>
                <Row className="g-0">

                  <span className="category">{view&&view.category}</span>
                  <Card.Title className="mb-3 g-0">{view&&view.title}</Card.Title>
                  <Card.Subtitle className="pb-3 mb-4 g-0">{`R$ ${view&&view.price}`} <span>{`ou até 12x de R$ ${(view&&view.price / 12)} sem juros`}</span></Card.Subtitle>
                  <Card.Text>Selecione o tamanho</Card.Text>
                  <Card.Text>{view&&view.description}</Card.Text>
                </Row>
                <Row className="g-0 gap-3">
                  <Row className="g-0"><ProductSizes id={id} productSizes={productSizes}/></Row>
                  <Row className="g-0">
                    <ButtonBlack handleSubmit={()=>addItem(view)}>Adicionar ao carrinho</
                    ButtonBlack>
                  </Row>
                  <Row>
                      <ToggleText toggle={toggles[0]}></ToggleText>
                      <ToggleText toggle={toggles[1]}></ToggleText>
                  </Row>
                </Row>
              </Card>
            </Col>
          </Row>
          
        </Container>
      </main>
      </div>
      <footer></footer>
    </>
    )
}


export default Product;


